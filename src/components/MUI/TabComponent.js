import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import InputComponent from './InputComponent';

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
        {/* Input Component - Pass the props passed from App.js */}
        <Tab label="Input" value="input-tab">
          <div>
            <InputComponent input={this.props.input} />
          </div>
        </Tab>
        
        {/* Tab #2 */}
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              Tab 2 content here.
            </p>
          </div>
        </Tab>
        
        {/* Tab #3 */}
        <Tab label="Tab C" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
            <p>
              Tab 3 content here.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}