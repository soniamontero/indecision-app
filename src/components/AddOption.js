import React from 'react';

export default class AddOption extends React.Component {
  handleOptionSubmitted = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option)
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOptionSubmitted}>
          <label htmlFor="">New Option</label>
          <input type="text" name='option' />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}