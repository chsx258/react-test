import React, { Component } from "react";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPageHook";
import HomePage from "./pages/HomePageHook";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";

class Main extends Component {
  render() {
    // TODO: Add Router
    return  <Router>
    <Switch>
      
      <Route exact path = "/login" Component = {AuthPage}></Route>
      <Route exact path = "/main" Component = {HomePage}></Route>
      <Route exact path = "/" Component = {AuthPage}></Route>
    </Switch>
    </Router>
  }
}

const mapStateToProps = (state) => ({
  // value: state.value,

});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
