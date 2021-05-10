import React from "react";
import { Grid } from '@material-ui/core';
export default function Item(props) {
  return (
    <>
    <Grid >
      <div className="layout-home-product">
        <div className="layout-home-product-item">
          <p className="p">{props.value.data.name}</p>
          <div className="layout-home-product-main">
            <p>
              Ngày Tạo :{" "}
              {new Date(props.value.data.date.seconds * 1000).toDateString()}
            </p>
            <p>Trạng Thái : {props.value.data.rules ? <span className="ss">Sẵn Sàng</span> : <span className="dt">Đã Tắt</span>}</p>
            <p>Thời Gian : {props.value.data.time} phút </p>
            <p>Số Câu : {props.value.data.totalQuestion} </p>
          </div>
        </div>
      </div>
      </Grid>
    </>
  );
}
