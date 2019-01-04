import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import SignUpComponent from "./components/signup/SignUpComponent";
import SignInComponent from "./components/signin/SignInComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticlesList from "./components/articlesList/ArticlesList";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent />

          <Provider store={store}>
            <ToastContainer />
            <Switch>
              <Route path="/articles" component={ArticlesList} />
              <Route path="/signup" component={SignUpComponent} />
              <Route path="/login" component={SignInComponent} exact />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
