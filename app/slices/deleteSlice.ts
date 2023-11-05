"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DeleteState {
    toDelete: string[];
}

const initialState: DeleteState = {
    toDelete: [],
};

export const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.toDelete.push(action.payload);
            console.log("Payload: ", action.payload);
            console.log([state.toDelete]);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.toDelete = state.toDelete.filter(
                (item) => item !== action.payload.toString()
            );
            console.log(state.toDelete);
        },
    },
});

export const { addItem, removeItem } = deleteSlice.actions;
export default deleteSlice.reducer;
