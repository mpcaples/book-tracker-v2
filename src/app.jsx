import React from 'react';
import AppRouter from '../routers/AppRouter';

import '../src/styles/styles.scss'; 
import store from './redux/store/store'; 
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';


const App = () => (
    <Provider store={store}>
        <CssBaseline>
            <AppRouter />
        </CssBaseline>
    </Provider>
)
   
export default App;