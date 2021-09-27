import React from 'react';
import classes from './User.module.css';
import { NavLink } from 'react-router-dom';


const User = props => {
  return (
    <div className={ classes['User'] }>
      <NavLink 
        to={`/${props.id}`} 
        className={ classes['UserLink'] } 
        activeClassName={ classes['active'] }
      >
        <div className={ classes['ava'] }>
        </div>
        <div className={ classes['data'] }>
          <div className={ classes['name'] }>
            { props.name }
          </div>
          <div className={ classes['last-message'] }>
            { props.lastMessage }
          </div>
          <div className={ classes['last-message-time'] }>
            { props.lastMessageTime }
          </div>
          <div className={ classes['new-message-count'] }>
            { props.lastMessageCount }
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default User;