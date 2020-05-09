import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  componentDidMount() { 
    try {
      console.log('loading data')
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options: options})) // can be written just ({ options })
      }
    }
    catch (event) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.options)
    console.log(this.state.options)
    if (prevState.options.length !== this.state.options.length) {
      console.log('saving data')
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  
  handleDeleteOptions= () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option
      })
    }))
  }

  handleDeleteOption = (optionToRemove) =>{
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const randNumb = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randNumb]
    this.setState(() => ({
      selectedOption: pick
    }));
    console.log(this.state.selectedOption)

  }

  handleAddOption = (option) => {
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }

  handleClosingClick = (props) => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  
  render() {
    const subtitle = 'Whatever make a pick';

    return (
      <div>
        <Header subtitle={subtitle} />
          <div className="container">
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}  />
            <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options} />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
      <OptionModal handleClosingClick={this.handleClosingClick} selectedOption={this.state.selectedOption} />
      </div>
    )
  }
}

export default IndecisionApp;