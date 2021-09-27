import React from 'react';
import MessagesContainer from './Messages/MessagesContainer'
import UsersContainer from './Users/UsersContainer';
import classes from './Dialogs.module.css';

class Dialogs extends React.Component {
  
  render() {
    return (
      <div className={ classes['Dialogs'] }>
        <UsersContainer/>
        <MessagesContainer/>
      </div> 
    );
  };
};

export default Dialogs;