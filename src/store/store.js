import { configureStore } from "@reduxjs/toolkit";
import {todoApi} from './todoApi'
export const store = configureStore({
    reducer:{
     todoApi:todoApi.reducer
    },
    middleware:(getMiddleware) => getMiddleware().concat(todoApi.middleware)
})