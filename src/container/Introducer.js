/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import IntroducerComponent from "./../components/introduce/Introducer";
import * as action from "./../action/introducer";
import Item from "./../components/introduce/Item";
import { Dialog, DialogContent } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function Introducer(props) {
  var { IntroducerStore, IntroducerMessageStore } = props;
  useEffect(() => {
    props.GET_USER_INTRODUCER();
  }, [1]);
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <Item value={value} onDelete={onDelete} key={key} />;
      });
    }

    return result;
  };

  const onDelete = (data) => {
    props.onDelete(data.id);
  };
  const addIntroducer = (data) => {
    props.addIntroducer(data);
  };
  const showDiaLogLoading = (data) => {
    if (data) {
      if (
        data.ADD_USER_INTRODUCER_LOADING ||
        data.GET_USER_INTRODUCER_LOADING ||
        data.DELETE_USER_INTRODUCER_LOADING
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
  if (
    IntroducerMessageStore.ADD_USER_INTRODUCER_SUCCESS ||
    IntroducerMessageStore.GET_USER_INTRODUCER_SUCCESS ||
    IntroducerMessageStore.DELETE_INTRODUCER_USER_SUCCESS
  ) {
    props.RESET_USER();
  }
  return (
    <>
      {showDiaLogLoading(IntroducerMessageStore)}
      <IntroducerComponent
        addIntroducer={addIntroducer}
        show={show(IntroducerStore)}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    IntroducerStore: state.IntroducerStore,
    IntroducerMessageStore: state.IntroducerMessageStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_USER_INTRODUCER: () => {
      dispatch(action.GET_USER_INTRODUCER());
    },
    addIntroducer: (data) => {
      dispatch(action.ADD_USER_INTRODUCER(data));
    },
    onDelete: (id) => {
      dispatch(action.DELETE_USER_INTRODUCER(id));
    },
    RESET_USER: () => {
      dispatch(action.RESET_USER());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Introducer);
