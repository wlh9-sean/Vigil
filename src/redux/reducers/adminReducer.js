const initialState = {
    first_name: '',
    last_name: '',
    id: null,
    email: '',
    password: '',
    is_admin: null
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export default function reducer(state= initialState, action){
   
    switch (action.type){
        case UPDATE_USER:
            const {first_name, last_name, email, id, is_admin} = action.payload
            return {...state, first_name, last_name, email, id, is_admin}
        default:
            return state
    }
}