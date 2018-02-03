import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import InputComponent from './InputComponent';
import ListComponent from './ListComponent';
import TableComponent from './TableComponent';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        {/* Input Component - Use the "input" props passed from App.js */}
        <Tab label="Input" value="input-tab">
          <div>
            <InputComponent input={this.props.input} />
          </div>
        </Tab>
        
        {/* List Component - Use the "users" props from App.js  */}
        <Tab label="List" value="list-tab">
          <div>
            <ListComponent users={this.props.users} />
          </div>
        </Tab>
        
        {/* Tab #3 */}
        <Tab label="Table" value="table-tab">
          <div>
            <TableComponent users={this.props.users} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}