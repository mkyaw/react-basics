import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const TestComponent = (props) => {
  const fruits = ['apple', 'banana', 'clementine'];

  return (
    <div>
      <List>
        {props.users.map(user => {
          return <ListItem primaryText={user.name} leftIcon={<ContentInbox />} />
        })}
      </List>
    </div>
  );
}

export default TestComponent;