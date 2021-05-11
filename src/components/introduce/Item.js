import React from "react";
import { Fab, Grid } from "@material-ui/core";
import "./styls.scss";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';export default function Item(props) {
  var { value } = props;
  const onDelete=()=>{
    props.onDelete(value);
  }
  return (
    <>
      <Grid>
       
        <div className="layout-home-product">
          <div className="layout-home-product-item">
          <Fab
              size="small"
              color="secondary"
              onClick={onDelete}
              aria-label="add"
            >
              <DeleteOutlineIcon   size="small" />
            </Fab>
            <div className="layout-home-product-main">
              <div className="layout-home-product-main-img">
                <img alt="###" src={value.data.img} />
              </div>
              <p className="p">{props.value.data.rules}</p>
              <p className="p-1">Họ Tên : {value.data.name}</p>
              <p className="p-1">FaceBook : Facebook.com/ </p>
              <p className="p-1">Phone : {value.data.phone} </p>
              <p className="p-1">Description : {value.data.des}</p>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
