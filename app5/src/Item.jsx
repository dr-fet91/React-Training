import { useContext } from "react";
import { TestContext } from "./TestContext";

// اینجا هم اومدیم از کانتکست برای تغییر رنگ استفاده کردیم


const Item = (props)=>{
    const context = useContext(TestContext);
    return(
        <div style={{color:context}}>
            {/* {props.Item} */}
            {props.children}
        </div>
    );
}

export default Item;