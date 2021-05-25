import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function Course(props) {
  const [open, setOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Name1, setName1] = useState("");
  const [Name2, setName2] = useState("");
  const [Time, setOTime] = useState("");
  const [Room, setORoom] = useState("");
  const [Document, setDocument] = useState("");
  const [Des, setDes] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAdd = () => {
    setOpen(false);
    props.onAdd({
      name: Name,
      des: Des,
      name1: Name1,
      name2: Name2,
      room: Room,
      document: Document,
      time: Time,
    });
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeTime = (e) => {
    setOTime(e.target.value);
  };
  const onChangeName1 = (e) => {
    setName1(e.target.value);
  };
  const onChangeName2 = (e) => {
    setName2(e.target.value);
  };
  const onChangeDes = (e, editor) => {
    var data = editor.getData();
    setDes(data);
  };
  const onChangeRoom = (e) => {
    setORoom(e.target.value);
  };
  const onChangeDocument = (e) => {
    setDocument(e.target.value);
  };
  const onOpen = () => {
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
        <DialogTitle id="form-dialog-title">Thêm category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên Khóa Học"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Thời gian học"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeTime}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Tài Liệu"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeDocument}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Đứng Lớp"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeName1}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Hổ trợ"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeName2}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Phòng Học"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeRoom}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Chi tiết"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeDes}
          /> */}
          <CKEditor
            // data={this.state.data}
            editor={ClassicEditor}
            onChange={onChangeDes}
            onReady={(editor) => {}}
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
          <p className="name-header-course">Giới Thiệu Các Khóa Học</p>
          <Grid container spacing={2}>
            <Fab
              size="small"
              color="secondary"
              onClick={onOpen}
              aria-label="add"
            >
              <AddIcon />
            </Fab>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={5}>
                {props.show}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
