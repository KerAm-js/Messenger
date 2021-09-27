import React from 'react' ;
import classes from './MessagesHeader.module.css';

const Header = props => {
  return (
    <header className={ classes['header'] }>
      <div class={ classes['ava'] }>
      </div>
      <div class={ classes['name'] }>
        Michael
      </div>
      <div class={ classes['more'] }>    
        <button class="dialog__user-selection-button"></button>
      </div>
    </header>
  )
}

export default Header;