import React from "react"
import "./styles/index.scss"
import 'animate.css'
import { Switch, Route, withRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./redux/reducer"
import IndexPage from "./pages/index/IndexPage"
import Header from "./components/core/header/Header"
import Footer from "./components/core/footer/Footer"
import SmallScreenAlert from './components/core/small-screen-alert/SmallScreenAlert'
import PageContent from "./layouts/page-content/PageContent"

const store = createStore(reducer)

const app = () => {

  return (
    <Provider store={store}>

      <SmallScreenAlert />

      <Header />

      <PageContent>
        <Switch>

          <Route path="/" exact component={ IndexPage } />

        </Switch>
      </PageContent>

      <Footer />

    </Provider>
  )
}

export default withRouter(app)