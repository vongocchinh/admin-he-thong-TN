/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Detail from "./../components/QuestionDetail/Deatail";
import * as action from "./../action/question";
function QuestionDetail(props) {
  var id = props.match.params.id;
  var { DetailQuestionStore } = props;
  // console.log(DetailQuestionStore);
  useEffect(() => {
    props.GET_QUESTION_DETAIL(id);
  }, [1]);
  return (
    <>
      <Detail DetailQuestionStore={DetailQuestionStore&&DetailQuestionStore} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    DetailQuestionStore: state.DetailQuestionStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_QUESTION_DETAIL: (idQuestion) => {
      dispatch(action.GET_QUESTION_DETAIL(idQuestion));
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(QuestionDetail);
