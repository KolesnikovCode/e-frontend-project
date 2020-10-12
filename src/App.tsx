import React from "react";
import "./styles/index.scss";
import '@blueprintjs/core/lib/css/blueprint.css';
import 'animate.css';
import { Switch, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import IndexPage from "./pages/index/IndexPage";
import Header from "./core/components/header/Header";
import Footer from "./core/components/footer/Footer";
import SmallScreenAlert from './core/components/small-screen-alert/SmallScreenAlert';
import PageContent from "./core/layouts/page-content/PageContent";
import CatalogPage from "./pages/catalog/CatalogPage";

const store = createStore(reducer);

const app = ({ history }: any) => {

  // Scroll window to top on change route
  history.listen(() => {
    window.scrollTo(0, 0);
  });
 
  
  return (
    <Provider store={store}>

      <SmallScreenAlert />

      <Header />

      <PageContent>
        <Switch>

          <Route path="/" exact component={ IndexPage } />
          <Route path="/catalog" exact component={ CatalogPage } />

        </Switch>
      </PageContent>

      <Footer />

    </Provider>
  )
}

export default withRouter(app);