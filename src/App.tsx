import React from "react";
import "./styles/index.scss";
import '@blueprintjs/core/lib/css/blueprint.css';
import 'animate.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./core/components/header/Header";
import Footer from "./core/components/footer/Footer";
import SmallScreenAlert from './core/components/small-screen-alert/SmallScreenAlert';
import LoaderWrapper from './core/components/loader-wrapper/LoaderWrapper';
import userApi from './core/api/user';
import { setUser } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import PageContent from "./core/layouts/page-content/PageContent";

// PAGES
import IndexPage from "./pages/index/IndexPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import ResultPage from "./pages/result/ResultPage";

const App = ({ history }: any) => {

  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  // Methods

  const fetchUser = React.useCallback(async () => {
    if (!user) {
      const { data: user } = await userApi.getUser();
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  const fetchInitialData = async () => {
    try {
      await fetchUser();
      setIsLoaded(true);
    } catch(e) {
      console.error('Error: ',e);
    }
  }

  React.useEffect(() => {
    fetchInitialData();
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

        <Header />

        <PageContent>
          <Switch>
            <Route path="/" exact component={ IndexPage } />
            <Route path="/result" exact component={ ResultPage } />
            <Route path="/catalog" exact component={ CatalogPage } />
          </Switch>
        </PageContent>

        <Footer />

        <SmallScreenAlert />

      </>
    </LoaderWrapper>
  )
}

export default withRouter(App);