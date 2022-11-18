import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    numberofPhone: 0,

}

export const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setNumberOfPhone: (state, action) => {
            state.numberofPhone = action.payload
        },
    }
})

export const { setName, setNumberOfPhone } = contactSlice.actions
export default contactSlice.reducer