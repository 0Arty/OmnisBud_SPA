import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    numberOfPhone: '',

}

export const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setNumberOfPhone: (state, action) => {
            let number = Number(action.payload)
            if (Number.isInteger(number)) {
                state.numberOfPhone = action.payload
            }

        },
    }
})

export const { setName, setNumberOfPhone } = contactSlice.actions
export default contactSlice.reducer