import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import logger from "redux-logger";

export const appStore=configureStore({
    reducer:{appReducer},
    middleware:[]
});


