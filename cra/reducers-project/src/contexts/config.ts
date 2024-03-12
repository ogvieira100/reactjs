import { ThemeAction } from "../types/ThemeReducer"
import { UserAction } from "../types/UserReducer"
import { themeInitialState, themeReducer } from "./reducers/themeReducer"
import { userInitialState, userReducer } from "./reducers/userReducer"

// Exportar todas os estados iniciais 
export const InitialState = {
   theme: themeInitialState,
   user:userInitialState
}

//Export all reducers

export const Reducers = (state:InitialStateType,action:ActionType) =>({
    theme:themeReducer(state.theme,action),
    user:userReducer(state.user,action)

})

//Export all types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction | UserAction