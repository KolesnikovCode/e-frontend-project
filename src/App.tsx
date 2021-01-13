import React from "react";
import "./styles/index.scss";
import '@blueprintjs/core/lib/css/blueprint.css';
import 'animate.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./core/components/header/Header";
import Footer from "./core/components/footer/Footer";
import LoaderWrapper from './core/components/loader-wrapper/LoaderWrapper';
import { clearCart, restoreCartFromLocalStorageIds, setProducts, setUser } from './redux/actions';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import ProductsAPI from './core/api/products';

import PageContent from "./core/layouts/page-content/PageContent";

// PAGES
import IndexPage from "./pages/index/IndexPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import ResultPage from "./pages/result/ResultPage";
import LookPage from "./pages/look/LookPage";
import AuthPage from "./pages/auth/AuthPage";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import routes from "./core/routes";
import { getCartProductIdsFromLocalStorage } from "./core/utils/localStorage";

// FIREBASE
const firebaseConfig = {
  apiKey: 'AIzaSyCg7wY4jEazBQN4xO-ZEkWkKkgmWFxLlXs',
  authDomain: "easy-react-app.firebaseapp.com",
  databaseURL: "https://easy-react-app.firebaseio.com",
  projectId: "easy-react-app",
  storageBucket: "easy-react-app.appspot.com",
  messagingSenderId: "886940872289",
  appId: "1:886940872289:web:ff343da2656e8ca63c0420",
  measurementId: "G-NBKFDHEEKX"
};
firebase.initializeApp(firebaseConfig);

const App = ({ history }: any) => {

  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  // Methods

  const fetchUser = async () => {
    return new Promise((res) => {
      firebase.auth().onAuthStateChanged(function(userData: any) {
        // eslint-disable-next-line
        userData ? dispatch(setUser(userData)) : undefined;
        res(userData);
      });
    })
  };

  const fetchProducts = async () => {
    return new Promise(async (res) => {
      const productsResponse = await ProductsAPI.getRealProducts();
      
      dispatch(setProducts(productsResponse.data));
      res(productsResponse);
    });
  };

  const setProductsInCartByLocalStorIds = () => {
    const sessStorageIds: Array<string> = getCartProductIdsFromLocalStorage();

    if (sessStorageIds.length) {
      dispatch(restoreCartFromLocalStorageIds(sessStorageIds));
    } else {
      dispatch(clearCart());
    }
  };

  const fetchInitialData = async () => {
    try {
      await fetchUser();
      await fetchProducts();
      setProductsInCartByLocalStorIds();
      setIsLoaded(true);
    } catch(e) {
      console.error('Error: ',e);
    }
  }

  React.useEffect(() => {
    fetchInitialData();

    const intervalUpdateProductsInCartByLocalStorIds = setInterval(setProductsInCartByLocalStorIds, 1000);
    return () => {
      clearInterval(intervalUpdateProductsInCartByLocalStorIds);
    }
    // eslint-disable-next-line
  }, []);

  // Scroll window to top on change route
  history.listen(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <LoaderWrapper
      isLoaded={ isLoaded }
    >
      <>
        <div className="background-gradient"></div>
        <Header />

        <Switch>
          {
            // TODO: specific wrapper height
          }
          <Route path={ routes.MAIN_PAGE } exact component={ IndexPage } />
          
          <PageContent>
            <Route path="/auth" exact component={ AuthPage } />
            <Route path="/look/:id" exact component={ LookPage } />
            <Route path="/result" exact component={ ResultPage } />
            <Route path="/catalog" exact component={ CatalogPage } />
            <Route path="/product/:id" exact component={ ProductPage } />
            <Route path={ routes.CART } exact component={ CartPage } />
          </PageContent>
        </Switch>

        <Footer />

      </>
    </LoaderWrapper>
  )
}

export default withRouter(App);