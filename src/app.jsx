import React from 'react';
import AppRouter from '../routers/AppRouter';

import '../src/styles/styles.scss'; 
import store from './redux/store/store'; 
import { Provider } from 'react-redux'


const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
   
export default App;