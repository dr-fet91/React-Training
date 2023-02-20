import { useContext } from "react";
import { TestContext } from "./TestContext";



const Item = (props)=>{
    const context = useContext(TestContext);
    const handleDeleteItem = (e)=>{
        // روش استاد
        // این بده اگه مقادیر هم نام باشن همه رو پاک می کنه برای همین از ایندکس استفاده می کنم
        context.setTimeArr(context.timeArr.filter(t => t != e.target.innerHTML));
        //روش خودم
        let index = e.target.getAttribute('data-index');
        context.setTimeArr(context.timeArr.filter((t, i) => i != index));
    }
    return(
        <div data-index={props.index} className="time_item" onClick={handleDeleteItem}>
            {/* {props.Item} */}
            {props.children}
        </div>
    );
}

export default Item;