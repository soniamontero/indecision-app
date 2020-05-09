import React from 'react';
import Option from './Option'

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    <p>These are your options:</p>
    {
      props.options.map((option) => (
        <Option 
          handleDeleteOption={props.handleDeleteOption}
          optionText={option} 
          key={option}
        />
      ))
    }
  </div>  
);

export default Options; 