import React from "react"
import "./styles/index.scss"
import 'animate.css'
import { Switch, Route, withRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./redux/reducer"
import IndexPage from "./pages/index/IndexPage"
import Header from "./components/core/Header"
import Footer from "./components/core/Footer"

const store = createStore(reducer)

const app = ({ location }: any) => {

  return (
    <Provider store={store}>

      <Header />

      <div className="page-content">
        <Switch>

          <Route path="/" exact component={ IndexPage } />

        </Switch>
      </div>

      <Footer />

    </Provider>
  )
}

export default withRouter(app)