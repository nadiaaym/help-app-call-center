import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const onSelected = props.onSelected;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right" >receivedTime</TableCell>
            <TableCell align="right">location</TableCell>
            <TableCell align="right">callingTo</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">ended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id} onClick={() => onSelected(row)}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.receivedTime}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.callingTo}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.ended}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
