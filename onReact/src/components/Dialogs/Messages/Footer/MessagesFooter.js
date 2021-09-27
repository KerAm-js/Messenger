import React from 'react' ;
import classes from './MessagesFooter.module.css';

const Footer = props => {
  return (
    <footer className={ classes['footer'] }>
      <div className={ classes['file-selection'] }>
          <button>File</button>
        </div>
        <div className={ classes['new-message'] }>
          <input 
            value={ props.newMessageText } 
            onChange={ 
              event => props.updateNewMessageText(event.target.value) 
            }
            type="text" 
            placeholder="Сообщение"
          />
        </div>
        <div class={ classes['send'] }>
          <button onClick={ props.sendMessage }>Send</button>
        </div>
    </footer>
  )
}

export default Footer;