import React from 'react';
import classes from './Message.module.css';

const Message = props => {
  let cls = [classes['Message']];
  if (props.sender === 'you') {
    cls.push(classes['my']);
  };
  return (
    <div className={ cls.join(' ') }>
      <span className={ classes['text'] }>{ props.text }</span>
      <span className={ classes['time'] }>{ props.time }</span>
    </div>
  );
};

export default Message;