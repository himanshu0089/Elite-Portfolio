import { useContext,useState } from "react";
import { createContext } from "react";

const ThemeContext=createContext();

function ThemeProvider({children}){
    const [theme,setTheme]=useState("light")
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme=()=>useContext(ThemeContext)
export{useTheme,ThemeProvider}