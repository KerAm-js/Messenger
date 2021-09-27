import logo from './logo.svg';
import classes from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={ classes['App'] }>     
        <Provider store={ store }>
          <Dialogs/>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
