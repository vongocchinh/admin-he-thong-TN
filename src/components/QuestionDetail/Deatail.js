import React from "react";
import { Paper } from "@material-ui/core";
import "./style.scss";
export default function Detail(props) {
  const showQ = (data) => {
    if (data.rules) {
      return (
        <>
          <Paper className="detail-paper">Câu Hỏi : {data.name}</Paper>
        </>
      );
    } else {
      return (
        <>
          <p> Câu hỏi:</p>
          <div className="img-layout-question-detail">
            <img alt="abc" src={data.name} />
          </div>
        </>
      );
    }
  };
  const show = (data) => {
    if (data) {
      return (
        <>
          {showQ(data)}
          <Paper className="detail-paper">Đáp Án A : {data.a}</Paper>
          <Paper className="detail-paper">Đáp Án B : {data.b}</Paper>
          <Paper className="detail-paper">Đáp Án C : {data.c}</Paper>
          <Paper className="detail-paper">Đáp Án D : {data.d}</Paper>
          <Paper className="detail-paper">Kết Quả : {data.result}</Paper>
        </>
      );
    }
  };
  var { DetailQuestionStore } = props;
  return (
    <>
      <div className="container">
        <div className="container-layout">
          <div className="detail">{show(DetailQuestionStore.data)}</div>
        </div>
      </div>
    </>
  );
}
