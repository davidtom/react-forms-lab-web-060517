import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  remainingChars(){
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <label>{this.remainingChars()}</label>
      </div>
    );
  }
}

export default TwitterMessage;
