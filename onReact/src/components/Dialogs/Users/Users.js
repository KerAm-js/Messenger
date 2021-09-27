import React from 'react'; 
import classes from './Users.module.css';
import Header from './Header/UsersHeader';
import User from './User/User';


class Users extends React.Component {
  render() {
    if (this.props.usersList.length === 0) {
      this.props.setUsers([
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
        {
          id:0,
          name: 'Chris',
          lastMessage: 'изображение',
          lastMessageTime: '10:49',
          lastMessageCount: 2,
        },
      ]);
    };
    console.log(this.props);
    let usersList = this.props.usersList.map( (user,index) => {
      return (
        <User 
          key={ index }
          id={ index }
          name={ user.name }
          lastMessage={ user.lastMessage }
          lastMessageTime={ user.lastMessageTime }
          lastMessageCount={ user.lastMessageCount }
        />
      );
    });
    return (
      <div className={ classes['Users'] }>
        <Header/>
        { usersList }
      </div>
    );
  };
};

export default Users;