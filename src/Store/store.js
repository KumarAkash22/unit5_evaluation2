import { configureStore } from "@reduxjs/toolkit";
import userReducer from './action'

export default configureStore (
    {
        reducer:{
            user:userReducer,
        }
    }
)