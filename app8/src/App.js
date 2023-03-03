import { useState } from "react";
import Content from "./Content";
import { MainContext } from "./contexts/MainContext";
import Sidebar from "./Sidebar";

const App = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <div>
            <MainContext.Provider value={{showMenu, setShowMenu}} >
                <Sidebar />
                <Content />
            </MainContext.Provider>
        </div>
    );
}
export default App;