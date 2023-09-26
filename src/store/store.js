'use client'
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/reducers/userReducer";
import { postReducer } from "@/reducers/postsReducer";
import logger from "redux-logger";
export const appStore=configureStore({
    reducer:{userReducer, postReducer},
    middleware:[logger]    
})