import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from '../Mycomponenet/features/darkModeSlice';

export const store =  configureStore({

    reducer : {
        darkMode: darkModeReducer

    }
});