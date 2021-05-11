import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export default function Introducer(props) {
  const [open, setOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Img, setImg] = useState("");
  const [Rules, setRules] = useState("");
  const [Fb, setFb] = useState("");
  const [Des, setDes] = useState("");
  const [Phone, setPhone] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeImg = (e) => {
    if (e.target.files[0]) {
      const images1 = e.target.files[0];
      setImg(images1);
    }
  };
  const onChangeRules = (e) => {
    setRules(e.target.value);
  };
  const onChangeFb = (e) => {
    setFb(e.target.value);
  };
  const onChangeDes = (e) => {
    setDes(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAdd = () => {
    setOpen(false);
    props.addIntroducer({
      img: Img,
      fb: Fb,
      rules: Rules,
      name: Name,
      phone: Phone,
      des: Des,
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="form-dialog-title">Thêm Cán Bộ</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên Cán Bộ"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chức vụ"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeRules}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Img"
            type="file"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeImg}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Facebook"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeFb}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangePhone}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Giới thiệu"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeDes}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleCloseAdd} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <div className="container-layout">
          <div className="add-icon-layout">
            <Fab
              size="small"
              color="primary"
              onClick={handleOpen}
              aria-label="add"
            >
              <AddIcon size="small" />
            </Fab>
          </div>
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
