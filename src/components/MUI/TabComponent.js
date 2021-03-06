import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import InputComponent from './InputComponent';
import ListComponent from './ListComponent';
import TableComponent from './TableComponent';
import TableComponentDummy from './TableComponentDummy';

const styles = {
  headline: {
    fontSize: 24,
    paddingLeft: 20,
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
          <h2 style={styles.headline}>Input Tab</h2>
          <div>
            <InputComponent input={this.props.input} />
          </div>
        </Tab>
        
        {/* List Component - Use the "users" props from App.js and populate the list  */}
        <Tab label="List" value="list-tab">
          <h2 style={styles.headline}>List Tab</h2>
          <div>
            <ListComponent users={this.props.users} />
          </div>
        </Tab>
        
        {/* Table Component - Use the "users" props from App.js and populate the table */}
        <Tab label="Table" value="table-tab">
          <h2 style={styles.headline}>Table Tab</h2>
          <div>
            <TableComponent users={this.props.users} />
          </div>
        </Tab>

        {/* Table Component - Use the "dummyUsers" props from App.js and populate the table */}
        <Tab label="Table - Dummy Data" value="table-tab-dummy">
          <h2 style={styles.headline}>Table Tab - Dummy Data</h2>
          <div>
            <TableComponentDummy users={this.props.dummyUsers} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}