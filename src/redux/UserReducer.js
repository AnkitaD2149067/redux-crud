import { createSlice } from "@reduxjs/toolkit"
import { userList } from "../Data/userList"

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    // initial data to be taken from the User List
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email, domain } = action.payload;
            const u = state.find(user => user.id == id);
            if (u) {
                u.name = name;
                u.email = email;
                u.domain = domain;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const u = state.find(user => user.id == id);
            if (u) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;