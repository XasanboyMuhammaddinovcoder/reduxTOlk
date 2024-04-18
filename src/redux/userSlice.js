import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state , actions) => {
            let copy = JSON.parse(JSON.stringify(state.value));
            copy.push(actions.payload);
            state.value = copy;
        },
        deleteUser: (state , actions) => {
            let copy = JSON.parse(JSON.stringify(state.value));
            copy = copy.filter(el => {
                return el.id != actions.payload
            })
            state.value = copy;

        },
        update: (state , actions) => {
            let copy = JSON.parse(JSON.stringify(state.value));
            copy = copy.map((el) => {
                if (el.id == actions.payload.id) {
                    el.name = actions.payload.name;
                    el.email = actions.payload.email;
                    el.pass = actions.payload.pass;
                }
                return el;
            })
            state.value = copy;

        }
    }

})
export const {add , deleteUser, update} = userSlice.actions;
export default userSlice.reducer;