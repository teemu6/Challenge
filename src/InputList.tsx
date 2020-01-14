import React from 'react';
import { Button, Table, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserInput } from './UserInput';

const inputListStyles = makeStyles({
    button: {
      backgroundColor: "white",
      borderRadius: "0.5em",
      textTransform: "none",
      margin: "0.5em",
    },
    tableheader: {
      backgroundColor: "#e6e6e6",
      borderTop: "2px solid #bfbfbf",
      borderBottom: "2px solid #bfbfbf",
    },
    tablerow: {
      borderBottom: "2px solid #bfbfbf",
    },
    show: {
        display: "block",
        textAlign: "left",
      },
    hide: {
      display: "none",
    },
  });
  
  const InputList: React.FC<{ inputs: UserInput[], deleteInput: any }> = ({ inputs, deleteInput }) => {
    const classes = inputListStyles();
    const [showinputdetails, setShowInputDetails] = React.useState<boolean[]>(
      Array(inputs.length).fill(false)
    );
  
    const Toggle = (index: number) => {
      let showinputdetailstemp = [...showinputdetails];
      showinputdetailstemp[index] = !showinputdetailstemp[index];
      setShowInputDetails(showinputdetailstemp);
    };
  
    if (inputs.length === 0) return (<p>No previous entries.</p>);
  
    const tablerows = inputs.map((input: UserInput, index: number) => {
      return (
        <TableRow key={index} className={classes.tablerow}>
          <TableCell> {input.name} </TableCell>
          <TableCell >{input.description}</TableCell>
          <TableCell align="right">
            <div className={showinputdetails[index] ? classes.show : classes.hide}>{"Comment: " + input.comment}</div>
            <Button className={classes.button} variant="contained" onClick={() => deleteInput(index)}>Delete</Button>
            <Button className={classes.button} variant="contained" onClick={() => Toggle(index)}>Details</Button>
          </TableCell>
        </TableRow>);
    });
  
    return (
      <div className="inputstable">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className={classes.tableheader}>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Description</b></TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {tablerows}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  export default InputList;