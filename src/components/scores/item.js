import React, {  } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CheckIcon from '@material-ui/icons/Check';
import MinimizeIcon from '@material-ui/icons/Minimize';
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

  const showCheck=(data)=>{
    if(data.rules!==""){
      return (<CheckIcon size="small" color="primary" /> )
    }else{
      return (<MinimizeIcon size="small" color="primary" />)
    }
  }
  return (
    <>
      <StyledTableRow>
        <StyledTableCell width={30} component="th" scope="row">
          {stt + 1}
        </StyledTableCell>
        <StyledTableCell width={200}  align="right">
          {value.data.fullname}
        </StyledTableCell>
        <StyledTableCell width={100}  align="right">
          {value.data.IDSV}
        </StyledTableCell>
        <StyledTableCell width={50} align="right">
        {value.data.count}
        </StyledTableCell>
        <StyledTableCell width={50} align="right">
        {showCheck(value.data)}
        </StyledTableCell>
        <StyledTableCell width={70} align="right">
          {value.data.online?<FiberManualRecordIcon size="small" color="primary" />:<FiberManualRecordIcon size="small" color="disabled" />}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
