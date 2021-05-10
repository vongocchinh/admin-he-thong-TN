import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";

export default function home(props) {
  return (
    <>
      <div className="container">
        <div className="container-layout">
          <div className="container-mr">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>
                  {props.show}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
