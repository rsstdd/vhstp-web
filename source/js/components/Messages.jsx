// File Name: components/Messages.jsx
// Description: Forms
// Used by:
// Dependencies:
// ------------------------------------------------------------

import React from 'react';

const Messages = (props) => {
  const {
    msgType,
    message
  } = props;

  return (
    <div className={`Msg Msg__${msgType}`}>
      <p>{ message }</p>
    </div>
  );
}

export default Messages;
