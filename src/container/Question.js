/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as action from "./../action/question";
import * as action2 from "./../action/category";
import QuestionComponent from "./../components/question/Question";
import ItemComponent from "./../components/question/Item";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Dialog, DialogContent } from "@material-ui/core";

function Question(props) {
  var id = props.match.params.id;
  var { QuestionStore, CategoryDetailStore, MessageQuestionStore } = props;
  useEffect(() => {
    props.GET_QUESTION_CATEGORY(id);

    props.GET_CATEGORY_DETAIL(id);
  }, [1]);
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return (
          <ItemComponent
            onDelete={onDelete}
            key={key}
            value={value}
            stt={key}
          />
        );
      });
    }

    return result;
  };
  if (
    MessageQuestionStore.ADD_QUESTION_CATEGORY_SUCCESS ||
    MessageQuestionStore.DELETE_QUESTION_CATEGORY_SUCCESS
  ) {
    props.RESET();
  }
  const showDiaLogLoading = (data) => {
    if (data) {
      if (
        data.ADD_QUESTION_CATEGORY_LOADING ||
        data.DELETE_QUESTION_CATEGORY_LOADING
      ) {
        return (
          <Dialog aria-labelledby="simple-dialog-title" open={true}>
            <DialogContent>
              <CircularProgress />
            </DialogContent>
          </Dialog>
        );
      }
    }
  };
  const onDelete = (value) => {
    props.onDelete(value);
  };
  const AddQuestion = (value) => {
    props.AddQuestion(value);
  };

  const convertData = (data) => {
    var arrNew = [];
    if (data) {
      for (var i = 0; i < data.length; i++) {
        arrNew.push(data[i].data);
      }
    }
    return arrNew;
  };
  return (
    <>
      {showDiaLogLoading(MessageQuestionStore)}
      <QuestionComponent
        AddQuestion={AddQuestion}
        CategoryDetailStore={CategoryDetailStore && CategoryDetailStore}
        show={show(QuestionStore)}
        QuestionStore={convertData(QuestionStore)}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    QuestionStore: state.QuestionStore,
    CategoryDetailStore: state.CategoryDetailStore,
    MessageQuestionStore: state.MessageQuestionStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_QUESTION_CATEGORY: (idCategory) => {
      dispatch(action.GET_QUESTION_CATEGORY(idCategory));
    },
    GET_CATEGORY_DETAIL: (idCategory) => {
      dispatch(action2.GET_CATEGORY_DETAIL(idCategory));
    },
    AddQuestion: (data) => {
      dispatch(action.ADD_QUESTION_CATEGORY(data));
    },
    onDelete: (data) => {
      dispatch(action.DELETE_QUESTION_CATEGORY(data));
    },
    RESET: () => {
      dispatch(action.RESET());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Question);
