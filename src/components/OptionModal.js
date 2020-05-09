import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  // !! converts string to true, converts undefined to false (the state was defined as undefined in IndecisionApp component)
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClosingClick}
    contentLabel="Selected Option"
    appElement={document.getElementById('app')}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Selected Option</h3>
    {
      props.selectedOption &&
      <p>{props.selectedOption}</p>
    }
    <button onClick={props.handleClosingClick} >Okay</button>
  </Modal>
);


export default OptionModal;