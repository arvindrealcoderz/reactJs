'use client'
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/reducers/userReducer";
import logger from "redux-logger";
export const appStore=configureStore({
    reducer:{userReducer},
    middleware:[logger]    
})