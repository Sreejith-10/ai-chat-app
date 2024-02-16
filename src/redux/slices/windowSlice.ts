"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type INTIAL_STATE_Type = {
    showSideBar:boolean
}

const INTIAL_STATE:INTIAL_STATE_Type = {
    showSideBar : false
}

const windowSlice = createSlice({
    name:"window",
    initialState:INTIAL_STATE,
    reducers:{
        setSideBar : (state,action:PayloadAction<boolean>) =>{
            state.showSideBar = action.payload
        }
    }
})

export const {setSideBar} = windowSlice.actions

export default windowSlice.reducer