"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import deleteReducer from "./slices/deleteSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        delete: deleteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
