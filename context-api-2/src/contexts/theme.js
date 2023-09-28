import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})  // In the 1st way there was nothing present in the createContect() but over here we can pass a default value inside createContext.


export const ThemeProvider= ThemeContext.Provider

//custom hook:-
export default function useTheme(){
    return useContext(ThemeContext)
}