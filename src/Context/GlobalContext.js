import { createContext, useReducer,useEffect } from "react";
import AppReducer from "./AppReducer";



const initialState={
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
}


export const GlobalContext =createContext(initialState)

export const GlobalProvider  = (props) => {
    

    const [state,dispatch] = useReducer(AppReducer,initialState)
        useEffect(() => {
            localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
        },[state])
    //Actions
    const addMoveToMovelist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
   
      }
      const removeMoveFromMovelist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
          };
    


    return (
        <GlobalContext.Provider
        value={{
          watchlist: state.watchlist,
          addMoveToMovelist,
          removeMoveFromMovelist,
        }}
        
        >{props.children}</GlobalContext.Provider>
    )
}

