import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./styles.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function Category(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);
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
    props.AddCategory({name,time});
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const onChangeName=(e)=>{
    setName(e.target.value)
  }
  const onChangeDate=(e)=>{
    setTime(e.target.value)
  }
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Stt</StyledTableCell>
                  <StyledTableCell align="right">Tên Khóa Học</StyledTableCell>
                  <StyledTableCell align="right">Ngày Tạo</StyledTableCell>
                  <StyledTableCell align="right">Mã Code</StyledTableCell>
                  <StyledTableCell align="right">Xác Nhận</StyledTableCell>
                  <StyledTableCell align="right">Thời Gian</StyledTableCell>
                  <StyledTableCell align="right">Câu Hỏi</StyledTableCell>
                  <StyledTableCell align="right">Điểm</StyledTableCell>
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
