import React from 'react';
import { TableCell, TAbleHead, TableRow, Paper, Table, TableHead, TableBody} from '@material-ui/core'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { PlayerDetails } from './PlayerDetails';
import store from '../redux/store';
import { connect } from 'react-redux';
import { SORT_DATA } from '../redux/actions/types'; 
import { sortData } from '../redux/actions/actions';

const toggleSort = () => {
  console.log('toggling the shit out of this button')
}


const ShowTable = (props) => {
  // console.log(props)
    return (
        <>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right" onClick={toggleSort} value='t20'>T20 Score</TableCell>
                  <TableCell align="right" onClick={toggleSort} value='odi'>ODI Score</TableCell>
                  <TableCell align="right" onClick={toggleSort} value='test'>Test Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.currentPlayers.map(row => (
                  <TableRow key={row.id}>
                    <TableCell><Link to={`/show/${row.id}`}>{row.name}</Link></TableCell>
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.t20}</TableCell>
                    <TableCell align="right">{row.odi}</TableCell>
                    <TableCell align="right">{row.test}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      ) 
}

export default connect(
  null,
 null
)(ShowTable);