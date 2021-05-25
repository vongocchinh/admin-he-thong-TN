/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import CommentIcon from "@material-ui/icons/Comment";
import { Grid } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useEffect } from "react";
import parser from 'html-react-parser'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function Item(props) {
  var { value } = props;
  const onDelete = () => {
    props.onDelete(value);
  };
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
  useEffect(() => {
    if (props&&value) {
        setName(value.data.name);
        setDes(value.data.des);
        setDocument(value.data.document)
        setOTime(value.data.time);
        setORoom(value.data.room);
        setName1(value.data.name1);
        setName2(value.data.name2);
    }
  }, [1]);
  const handleCloseAdd = () => {
    setOpen(false);
    props.onEdit({
      id: value.id,
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
            defaultValue={Name}
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
            defaultValue={Time}
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
            defaultValue={Document}
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
            defaultValue={Name1}
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
            defaultValue={Name2}
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
            defaultValue={Room}
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
            defaultValue={Des}
          /> */}
          <CKEditor
            data={Des}
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
      <Grid className="item-course-layout-course" key={value} item>
        <Paper className="item-course-layout">
          <div className="item-course-layout-button">
            <Fab size="small" color="primary" onClick={onOpen} aria-label="add">
              <EditIcon />
            </Fab>
            <Fab
              size="small"
              color="secondary"
              onClick={onDelete}
              aria-label="add"
            >
              <HighlightOffIcon />
            </Fab>
          </div>
          <p className="name-header-course-1">
            {value.data.name}
            <CommentIcon className="CommentIcon" size="small" color="primary" />
          </p>
          <p className="name-header-course-2">
            <span>Giới thiệu khóa học:</span>
            <br />
            {parser(value.data.des)}.
          </p>
          <p className="name-header-course-4">
            <span>Người Đứng Lớp:</span> {value.data.name1}
          </p>
          <p className="name-header-course-4">
            <span>Hổ trợ:</span> {value.data.name2}
          </p>
          <p className="name-header-course-4">
            <span>Thời gian học:</span> {value.data.time}
          </p>
          <p className="name-header-course-4">
            <span>Phòng:</span> {value.data.room}
          </p>
          <p className="name-header-course-4">
            <span>Tài liệu:</span>
            <a target="_bank" href={value.data.document}>
              <GetAppIcon className="GetAppIcon" size="small" color="primary" />
            </a>
          </p>
        </Paper>
      </Grid>
    </>
  );
}
