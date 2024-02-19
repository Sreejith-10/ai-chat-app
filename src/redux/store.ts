"use client";

import {configureStore} from "@reduxjs/toolkit";
import windowReducer from "./slices/windowSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		window: windowReducer,
		auth: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
