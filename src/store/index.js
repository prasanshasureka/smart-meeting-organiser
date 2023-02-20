import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './main/index'

export const store =  ({
    reducer:{
        main: mainReducer
    }
})