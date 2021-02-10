import React, { Component } from "react";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPageHook";
import HomePage from "./pages/HomePageHook";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Main extends Component {
  render() {
    // TODO: Add Router
    return <Switch>
      
    <Route exact path = "/login"><AuthPage/></Route>
    <Route exact path = "/main"><HomePage/></Route>
    <Route exact path = "/" ><AuthPage/></Route>
  </Switch>
  }
}

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
