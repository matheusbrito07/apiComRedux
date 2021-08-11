const INITIAL_STATE = {}

export default function homeReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "GET_PERSONAGEM":

            state = {
                ...state,
                name: action.payload.name,
                height: action.payload.height,
                mass: action.payload.mass,
                gender: action.payload.gender,
            }
            console.log(state)
            return state
        
        case "ALTER_NAME":

            state = {
                ...state,
                name: action.payload.name,
            }
        default:
            return state
    }
}