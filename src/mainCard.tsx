import React, { useContext } from "react"
import { AppContext } from "./App";

const MainCard = ({children}:any) => {
    const context = useContext(AppContext)
    console.log(context);
    
    return(
        <>
              <div className="md:bg-black md:bg-opacity-35 md:p-28 md:rounded-2xl md:border-2 md:border-gray-300 ">
                {children}
              </div>
        </>
    )
}
export default MainCard;
