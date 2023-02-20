import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = (props)=>{

    const context = useContext(TestContext);
    return (
        <div className="main-time-list">
           
            {context.timeArr.map((c, index)=>(
                // <Item key={Math.random()} Item={c} />
                <Item index={index} key={Math.random()}>{c}</Item>
            ))}
            
        </div>
    );
}

export default TimeList;