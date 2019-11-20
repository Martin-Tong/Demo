import React from 'react';
import './App.css';

function Block(props) {
  return <p>{props.value}</p>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Block value={this.state.value} />
        <label>输入框：
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    )
  };
}

export default App;
