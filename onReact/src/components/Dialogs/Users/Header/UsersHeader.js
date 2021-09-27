import React from 'react' ;
import classes from './UsersHeader.module.css';

const Header = props => {
  return (
    <header className={ classes['header'] }>
       <div className={ classes['link'] }>
          <a href="#">Профиль</a>
        </div>
        <div className={ classes['search'] }>
          <input type="text" placeholder="Поиск"/>
        </div>
    </header>
  )
}

export default Header;