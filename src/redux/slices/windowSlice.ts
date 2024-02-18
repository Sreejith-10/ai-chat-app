"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type INTIAL_STATE_Type = {
    showSideBar:boolean,
    sideBarSlider:number
}

const INTIAL_STATE:INTIAL_STATE_Type = {
    showSideBar : false,
    sideBarSlider:0
}

const windowSlice = createSlice({
    name:"window",
    initialState:INTIAL_STATE,
    reducers:{
        setSideBar : (state,action:PayloadAction<boolean>) =>{
            state.showSideBar = action.payload
        },
        setSideBarWidth: (state,action:PayloadAction<number>)=>{
            state.sideBarSlider = action.payload
        }
    }
})

export const {setSideBar,setSideBarWidth} = windowSlice.actions

export default windowSlice.reducer