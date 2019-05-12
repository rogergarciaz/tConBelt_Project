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
    backgroundColor: 'rgb(115, 197, 226)',
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
function createData(name, valor, unidad) {
  id += 1;
  return { id, name, valor, unidad};
}

function CustomizedTable(props) {
  const { classes } = props;
  const rows = [
    createData('Frecuencia', props.datos.value , '[Hz]'),
    createData('Línea A', props.datos.c1, '[A]'),
    createData('Línea B', props.datos.c2, '[A]'),
    createData('Línea C', props.datos.c3,'[A]'),
    createData('Voltaje A-B', props.datos.vab, '[V]'),
    createData('Voltaje B-C', props.datos.vbc, '[V]'),
    createData('Voltaje C-A', props.datos.vca, '[V]'),
    createData('Potencia activa línea A', props.datos.pa, '[W]'),
    createData('Potencia activa línea B', props.datos.pb, '[W]'),
    createData('Potencia activa línea C', props.datos.pc, '[W]'),
    createData('Sensor', props.datos.sensor, '[RPM]'),
    createData('Pistón', ((props.datos.piston===1 )? 'Activado' : 'Desactivado')),
  ];
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Parámetro</CustomTableCell>
            <CustomTableCell align="right">Valor</CustomTableCell>
            <CustomTableCell align="right">Unidad</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.valor}</CustomTableCell>
              <CustomTableCell align="right">{row.unidad}</CustomTableCell>
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