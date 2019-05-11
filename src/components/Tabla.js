import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(date, c1, c2, c3, vab, vbc, vca, pa, pb, pc, sensor) {
  id += 1;
  return { id, date, c1, c2, c3, vab, vbc, vca, pa, pb, pc, sensor};
}
const rows=[]
function CustomizedTable(props) {
  const { classes } = props;
  id=0;
  for (var i = 0; i < 10; i++) {
    rows[i]= (createData(
      props.datos.date[i],
      props.datos.c1[i],
      props.datos.c2[i],
      props.datos.c3[i],
      props.datos.vab[i],
      props.datos.vbc[i],
      props.datos.vca[i],
      props.datos.pa[i],
      props.datos.pb[i],
      props.datos.pc[i],
      props.datos.sensor[i]))
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Fecha</CustomTableCell>
            <CustomTableCell align="right">Corriente A</CustomTableCell>
            <CustomTableCell align="right">Corriente B</CustomTableCell>
            <CustomTableCell align="right">Corriente C</CustomTableCell>
            <CustomTableCell align="right">Voltaje A-B</CustomTableCell>
            <CustomTableCell align="right">Voltaje B-C</CustomTableCell>
            <CustomTableCell align="right">Voltaje C-A</CustomTableCell>
            <CustomTableCell align="right">Potencia A</CustomTableCell>
            <CustomTableCell align="right">Potencia B</CustomTableCell>
            <CustomTableCell align="right">Potencia C</CustomTableCell>
            <CustomTableCell align="right">Sensor</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.date}
              </CustomTableCell>
              <CustomTableCell align="right">{row.c1}</CustomTableCell>
              <CustomTableCell align="right">{row.c2}</CustomTableCell>
              <CustomTableCell align="right">{row.c3}</CustomTableCell>
              <CustomTableCell align="right">{row.vab}</CustomTableCell>
              <CustomTableCell align="right">{row.vbc}</CustomTableCell>
              <CustomTableCell align="right">{row.vca}</CustomTableCell>
              <CustomTableCell align="right">{row.pa}</CustomTableCell>
              <CustomTableCell align="right">{row.pb}</CustomTableCell>
              <CustomTableCell align="right">{row.pc}</CustomTableCell>
              <CustomTableCell align="right">{row.sensor}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper> 
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);