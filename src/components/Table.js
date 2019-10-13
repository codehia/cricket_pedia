import React from 'react';
import { TableCell, TAbleHead, TableRow, Paper, Table, TableHead, TableBody} from '@material-ui/core'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import playerDetails from './PlayerDetails';
import store from '../redux/store';

const ShowTable = props => {
  console.log(props);
  console.log(store.getState());
    return (
        <>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">T20 Score</TableCell>
                  <TableCell align="right">ODI Score</TableCell>
                  <TableCell align="right">Test Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.currentPlayers.map(row => (
                  <TableRow key={row.name}>
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

export default ShowTable;