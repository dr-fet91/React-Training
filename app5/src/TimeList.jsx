import Item from "./Item";

const TimeList = (props)=>{
    return (
        <div className="main-time-list">
           
            {props.children.map((c)=>(
                // <Item key={Math.random()} Item={c} />
                <Item key={Math.random()}>{c}</Item>
            ))}
            
        </div>
    );
}

export default TimeList;