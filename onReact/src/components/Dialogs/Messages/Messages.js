import React from 'react'; 
import Message from './Message/Message';
import Header from './Header/MessagesHeader';
import Footer from './Footer/MessagesFooter';
import classes from './Messages.module.css';

const Messages = props => {
  
  let messages = props.messages.map( (message,index) => {
    return (
      <Message 
        key={ index }
        text={ message.text }
        time={ message.time }
        sender={ message.sender }
      />
    )
  })
  
  return (
    <div className={ classes['Messages'] }>
      <Header/>
      <div className={ classes['main'] }>
        { messages }
      </div>
      <Footer
        newMessageText={ props.newMessageText }
        updateNewMessageText={ props.updateNewMessageText }
        sendMessage={ props.sendMessage }
      />
    </div>
  )
}

export default Messages;