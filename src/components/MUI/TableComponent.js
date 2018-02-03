import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Face,Email, Assignment} from 'material-ui-icons';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn><Assignment /><br />ID</TableHeaderColumn>
        <TableHeaderColumn><Face /><br />Name</TableHeaderColumn>
        <TableHeaderColumn><Email /><br />Email</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {props.users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.name}</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
            </TableRow>
          )
        })}
    </TableBody>
  </Table>
);

export default TableExampleSimple;