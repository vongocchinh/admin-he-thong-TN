import React, {  } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function Item(props) {

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


  return (
    <>

      <StyledTableRow>
        <StyledTableCell width={30} component="th" scope="row">
          {stt + 1}
        </StyledTableCell>
        <StyledTableCell width={200}  align="right">
          {value.data.fullname}
        </StyledTableCell>
        <StyledTableCell width={200} align="right">
          {value.data.IDSV}
        </StyledTableCell>
        <StyledTableCell width={200} align="right">
          {value.data.online?"Online":"Offline"}
        </StyledTableCell>
        <StyledTableCell width={200} align="right">
          {value.data.quyen===2?"Mọi Người":"DON'T"}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
