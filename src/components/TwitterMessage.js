import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      //maxChars: ""
      chars: ""
    };
  }
  handleChars = e => {
    this.setState({
      chars: e.target.value
    })
  }

  render() {
    let remChars = this.props.maxChars - this.state.chars.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChars} value={this.state.chars}/>
        {remChars}
      </div>
    );
  }
}

export default TwitterMessage;
