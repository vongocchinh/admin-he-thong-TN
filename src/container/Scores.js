/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import * as action from "./../action/math";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Dialog, DialogContent } from "@material-ui/core";

import { useEffect } from "react";
import ScoresComponent from "./../components/scores/Scores";
import Item from "./../components/scores/item";
function Scores(props) {
  var { ScoresStore, ScoresMessageStore,CategoryDetailStore } = props;
  var id = props.match.params.id;
  useEffect(() => {
    props.GET_USER_CATEGORY(id);
  }, [1]);
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <Item stt={key} key={key} value={value} />;
      });
    }
    return result;
  };
  const handleReset = () => {
    props.handleReset(id);
  };
  const addUserCategory = (value) => {
    var data = {
      ...value,
      categoryId: id,
    };
    props.addUserCategory(data);
  };
  if (
    ScoresMessageStore.ADD_USER_CATEGORY_SUCCESS ||
    ScoresMessageStore.RESET_USER_CATEGORY_SUCCESS
  ) {
    props.RESET();
  }
  const showDiaLog = (ScoresMessageStore) => {
    if (ScoresMessageStore) {
      if (
        ScoresMessageStore.ADD_USER_CATEGORY_LOADING ||
        ScoresMessageStore.RESET_USER_CATEGORY_LOADING
      ) {
        return (
          <>
            <Dialog aria-labelledby="simple-dialog-title" open={true}>
              <DialogContent>
                <CircularProgress />
              </DialogContent>
            </Dialog>
          </>
        );
      }
    }
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
      {showDiaLog(ScoresMessageStore)}
      <ScoresComponent
        addUserCategory={addUserCategory}
        handleReset={handleReset}
        show={show(ScoresStore)}
        User={convertData(ScoresStore)}
        CategoryDetailStore={CategoryDetailStore}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    ScoresStore: state.ScoresStore,
    ScoresMessageStore: state.ScoresMessageStore,
    CategoryDetailStore:state.CategoryDetailStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_USER_CATEGORY: (id) => {
      dispatch(action.GET_USER_CATEGORY(id));
    },
    handleReset: (id) => {
      dispatch(action.RESET_RULES_USER(id));
    },
    addUserCategory: (data) => {
      dispatch(action.ADD_USER_CATEGORY(data));
    },
    RESET: () => {
      dispatch(action.RESET());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Scores);
