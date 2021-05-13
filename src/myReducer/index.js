import { combineReducers } from "redux";
import CategoryStore from "./category/category";
import CategoryDetailStore from "./category/categoryDetail";
import MessageDetailStore from "./category/Message";
import MessageQuestionStore from "./question/message";
import DetailQuestionStore from "./question/questionDetail";

import QuestionStore from "./question/question";

import ScoresStore from "./scores/scores";
import ScoresMessageStore from "./scores/message";
import UserStore from "./user/user";
import UserMessageStore from "./user/message";

import LoginAdminStore from './login/login';

import LoginAdminMessageStore from './login/message';

import IntroducerStore from './introducer/introducer';
import IntroducerMessageStore from './introducer/message';

import CourseMessageStore from './course/message';

import CourseStore from './course/course';

var myReducer = combineReducers({
  CategoryStore,
  QuestionStore,
  CategoryDetailStore,
  ScoresStore,
  MessageDetailStore,
  MessageQuestionStore,
  ScoresMessageStore,
  DetailQuestionStore,
  UserMessageStore,
  UserStore,
  LoginAdminStore,
  LoginAdminMessageStore,
  IntroducerStore,
  IntroducerMessageStore,
  CourseMessageStore,
  CourseStore
});
export default myReducer;
