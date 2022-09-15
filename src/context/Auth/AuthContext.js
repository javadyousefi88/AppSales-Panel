/* eslint-disable prettier/prettier */
import React, { useReducer } from 'react'
export const AuthContext = React.createContext()
const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      const token = action.payload
      localStorage.setItem('token',token)
      console.log(token);
      return {state:token}
    default:
      return state
  }
}
const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, '')
  // eslint-disable-next-line react/prop-types
  return(<AuthContext.Provider value={{state, dispatch}}>{props.children}</AuthContext.Provider>)
}
export default AuthContextProvider
