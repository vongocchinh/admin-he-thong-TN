import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ExportCSV } from "./export";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Question(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [Checked, setChecked] = useState(true);
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [result, setResult] = useState("");
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 13,
    },
  }))(TableCell);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAdd = () => {
    setOpen(false);
    props.AddQuestion({
      a: A,
      b: B,
      c: C,
      d: D,
      name,
      result,
      rules: Checked,
      categoryId: props.CategoryDetailStore.id,
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const onChangeName = (e) => {
    if (Checked) {
      setName(e.target.value);
    } else {
      if (e.target.files[0]) {
        const images1 = e.target.files[0];
        setName(images1);
      }
    }
  };
  const onChangeA = (e) => {
    setA(e.target.value);
  };
  const onChangeB = (e) => {
    setB(e.target.value);
  };
  const onChangeC = (e) => {
    setC(e.target.value);
  };
  const onChangeD = (e) => {
    setD(e.target.value);
  };
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const showLength=(data)=>{
    if(data.length<=0){
      return <>&nbsp;(Chưa có dữ liệu)</>
    }
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="form-dialog-title">Thêm câu hỏi</DialogTitle>
        <DialogContent>
          <Checkbox
            checked={Checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />{" "}
          {Checked ? "Câu hỏi dạng chữ" : "Câu hỏi dạng ảnh"}
          <br />
          {Checked ? (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tên Câu hỏi"
              type="text"
              className="dialog-category-add"
              width="300px"
              onChange={onChangeName}
            />
          ) : (
            <>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="file"
                className="dialog-category-add"
                width="300px"
                onChange={onChangeName}
              />
            </>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="a"
            label="Câu A"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeA}
          />
          <TextField
            autoFocus
            margin="dense"
            id="b"
            label="Câu B"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeB}
          />
          <TextField
            autoFocus
            margin="dense"
            id="c"
            label="Câu C"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeC}
          />
          <TextField
            autoFocus
            margin="dense"
            id="d"
            label="Câu D"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeD}
          />
          <TextField
            autoFocus
            margin="dense"
            id="result"
            label="Đáp Án"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeResult}
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
          <p className="p-h">
            Câu Hỏi Bài Thi{" "}
            {props.CategoryDetailStore.data
              ? props.CategoryDetailStore.data.name
              : ""}
              {showLength(props.QuestionStore)}
          </p>
          <div className="add-icon-layout">
            <Fab
              size="small"
              color="primary"
              onClick={handleOpen}
              aria-label="add"
              title="Thêm Câu Hỏi"
            >
              <AddIcon size="small" />
            </Fab>

            <ExportCSV  csvData={props.QuestionStore} fileName={props.CategoryDetailStore.data?props.CategoryDetailStore.data.name:""} />
          </div>
          
          <TableContainer component={Paper}>
            
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Stt</StyledTableCell>
                  <StyledTableCell align="right">Tên Câu hỏi</StyledTableCell>
                  <StyledTableCell align="right">Đáp Án</StyledTableCell>
                  <StyledTableCell align="right">Chi Tiết</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{props.show}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
