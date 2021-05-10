import React, {  } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function USER(props) {
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

  return (
    <>
      <div className="container">
        <div className="container-layout">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Stt</StyledTableCell>
                  <StyledTableCell align="right">Tên Sinh Viên</StyledTableCell>
                  <StyledTableCell align="right">Mã Sinh Viên</StyledTableCell>
                  <StyledTableCell align="right">Trạng Thái</StyledTableCell>
                  <StyledTableCell align="right">Phân Quyền</StyledTableCell>
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
