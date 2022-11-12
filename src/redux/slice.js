import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: {
    }
}

export const Slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {
        testReducer: (state, action) => {},

    }
})

export const { testReducer } = Slice.actions
export default Slice.reducer