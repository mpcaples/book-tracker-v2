import React from 'react';
import AppRouter from '../routers/AppRouter';

import '../src/styles/styles.scss'; 
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import { persistor, store } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
    <Provider store={store}>
        <CssBaseline>
            <PersistGate loading={null} persistor={persistor}>
                 <AppRouter />
            </PersistGate>
        </CssBaseline>
    </Provider>
)
   
export default App;