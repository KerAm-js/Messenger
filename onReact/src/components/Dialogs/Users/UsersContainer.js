import React from 'react'; 
import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC } from '../../../Redux/dialogs-reducer';
 
const mapStateToProps = state => {
  console.log(state)
  return {
    usersList: state.dialogsPage.usersList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;