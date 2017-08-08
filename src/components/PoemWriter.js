import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value
    }, this.validPoem(event.target.value))
  }

  threeLines(poem){
    return poem.split("\n").length === 3
  }

  threeWords(line){
    return line.trim().split(" ").length === 3
  }

  fiveWords(line){
    return line.trim().split(" ").length === 5
  }

  validPoem = (poem) => {
    if (this.threeLines(poem)){
      let l1 = poem.split("\n")[0]
      let l2 = poem.split("\n")[1]
      let l3 = poem.split("\n")[2]
      if(this.fiveWords(l1) && this.fiveWords(l3) && this.threeWords(l2)){
        console.log("valid");
        this.setState({valid: true})
      } else {
        console.log("invalid");
        this.setState({valid: false})}
    } else {
      console.log("invalid");
      this.setState({valid: false})
    }
  }

  errorDiv(){
    return (
      <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>
    )
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.poem}
          onChange = {this.handleChange}
        />
      {this.state.valid ? null : this.errorDiv()}
      </div>
    );
  }
}

export default PoemWriter;
