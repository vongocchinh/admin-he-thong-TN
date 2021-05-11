import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryContainer from "../container/Category";
import HomeContainer from "../container/Home";
import QuestionContainer from "../container/Question";
import QuestionDetail from "../container/QuestionDetail";
import Scores from "../container/Scores";
import UserContainer from "../container/User";
import Login from './../container/Login';
import Introducer from './../container/Introducer';

export default function router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route  path="/category" component={CategoryContainer}></Route>
        <Route path="/user" component={UserContainer} ></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/question/:id" component={QuestionContainer} ></Route>
        <Route path="/scores/:id" component={Scores} ></Route>
        <Route path="/question-detail/:id" component={QuestionDetail} ></Route>
        <Route path="/introducer" component={Introducer} ></Route>


      </Switch>
    </>
  );
}
