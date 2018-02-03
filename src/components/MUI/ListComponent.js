import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Face,} from 'material-ui-icons';
import Divider from 'material-ui/Divider';

const ListComponent = (props) => (
  <div>
    <List>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <ListItem primaryText={user.name} leftIcon={<Face />} secondaryText={user.email} />
            <Divider />
          </div>
        )
      })}
    </List>
  </div>
);

export default ListComponent;