import React from 'react';

export default class StoryForm extends React.Component {
  state = {
    title: "",
    author: "",
    url: ""  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleChangeAuthor = (e) => {
  //   this.setState({
  //     author: e.target.value
  //   })
  // }

  // handleChangeUrl = (e) => {
  //   this.setState({
  //     url: e.target.value
  //   })
  // }

  render() {
    return (
      <form>
        <h2>Story Form</h2>
        <input type="text" name="title" value={this.state.title} 
          onChange={this.handleChange}/>

        <input type="text" name="author" value={this.state.author} 
          onChange={this.handleChange}/>

        <input type="text" name="url" value={this.state.url} 
          onChange={this.handleChange}/>  
        <button>Submit</button>
      </form>
    )
  }
}