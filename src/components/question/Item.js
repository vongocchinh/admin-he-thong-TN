import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// import Switch from "@material-ui/core/Switch";
import Fab from "@material-ui/core/Fab";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
export default function Item(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({}))(TableRow);

  var { value, stt } = props;

  const onDelete = () => {
    props.onDelete(value);
  };

  // const onChangeRules = () => {
  //   props.onChangeRules(value);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpen(false);
    props.EditCategory({
      name: name,
      time: time,
      date: props.value.data.date,
      code: props.value.data.code,
      rules: props.value.data.rules,
      totalQuestion: props.value.data.totalQuestion,
      id: props.value.id,
    });
  };
  // const onEdit = () => {
  //   setOpen(true);
  // };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDate = (e) => {
    setTime(e.target.value);
  };
  const showDA = (data, result) => {
    switch (result) {
      case data.a:
        return "A";
      case data.b:
        return "B";
      case data.c:
        return "C";
      case data.d:
        return "D";
      default:
        break;
    }
  };
  const showQuestionName=(data)=>{
    if(data){
      if(data.rules){
        return (
          <>{data.name}</>
        )
      }else{
        return (
          <>
          <div className="img-layout-question">
            <img alt="/abc" src={data.name} />
          </div>
          </>
        )
      }
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
        <DialogTitle id="form-dialog-title">Edit category</DialogTitle>
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
            defaultValue={props.value.data.name}
          />
          <TextField
            defaultValue={props.value.data.time}
            autoFocus
            margin="dense"
            id="date"
            label="Thời gian"
            type="number"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeDate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleCloseEdit} color="primary">
            Chinh sua
          </Button>
        </DialogActions>
      </Dialog>
      <StyledTableRow>
        <StyledTableCell width={30} component="th" scope="row">
          {stt + 1}
        </StyledTableCell>
        <StyledTableCell width={200}  align="right">
          {showQuestionName(value.data)}
        </StyledTableCell>
        <StyledTableCell width={50} align="right">
          {showDA(value.data,value.data.result)}
        </StyledTableCell>
        <StyledTableCell width={70} align="right">
          <Link to={"/question-detail/"+value.id}>
            <Fab size="small" color="default" aria-label="edit">
              <QuestionAnswerIcon />
            </Fab>
          </Link>
        </StyledTableCell>
        <StyledTableCell width={120} align="right">
          {/* <Fab size="small" color="primary" aria-label="edit" >
            <EditIcon />
          </Fab>
          &nbsp; */}
          <Fab
            size="small"
            color="secondary"
            aria-label="delete"
            onClick={onDelete}
          >
            <DeleteIcon />
          </Fab>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
