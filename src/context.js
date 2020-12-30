import { useState, createContext } from "react";

export const MenuContext = createContext()

const MenuContextProvider = ({children}) => {
    
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <MenuContext.Provider value={{
            menuToggle,
            setMenuToggle,
        }} >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;