import React, { useContext, useState } from "react";
import { taskContext } from "./taskContext";

const TaksItems = () => {
    const { taskItems, setTaskItems } = useContext(taskContext);
    const [ foreceRender, setForceRender ] = useState(0);
    const getId = (elem) => {
        let parent = elem.target.parentNode.parentNode;
        let id = parent.getAttribute('data-id');
        return id;
    }
    // این روش خودم بود یه مشکلی داشت که ناچار شدم از فورس رندر استفاده کنم
    // راه استاد اینه که درست تره
    // const handleChackTask = (e) => {
    //     let id = getId(e);
    //     try {
    //         let index = taskItems.findIndex((item) => item.id == id);
    //         taskItems[index]['done'] = true;
    //         setTaskItems(taskItems);
    //         setForceRender(!foreceRender);
    //     } catch (error) {

    //     }
    // }
    // const handleUnchackTask = (e) => {
    //     let id = getId(e);
    //     try {
    //         let index = taskItems.findIndex((item) => item.id == id);
    //         taskItems[index]['done'] = false;
    //         setTaskItems(taskItems);
    //         setForceRender(!foreceRender);
    //     } catch (error) {

    //     }
    // }

    const handleChackTask = (e) => {
        let id = getId(e);
        let index = taskItems.findIndex(item => item.id == id);
            let newTaskItems = [...taskItems];
            newTaskItems[index].done = !newTaskItems[index].done;
            setTaskItems(newTaskItems);
        try {
            
        } catch (error) {

        }
    }
    const handleDeleteTask = (e)=>{
        let id = getId(e);
        let index = taskItems.findIndex(item => item.id == id);

        //اولی روشه خودمه دومی استاد
        //عجیبه چرا دومی استاد کار می کنه فکر می کردم باید ایندکس باشه چطوری پیدا می کنه؟

        //let newTaskItems = taskItems.filter((item, i) => i != index);
        let newTaskItems = taskItems.filter((item) => item.id != id);
        setTaskItems(newTaskItems);
    }
    if (taskItems.length) {
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {taskItems.map((t, i) => (
                    <li data-id={t.id} key={i} className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                        {t.title}
                        <span>
                            {
                                t.done ?
                                    (<i onClick={handleChackTask} className="h-zoom me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>) :
                                    (<i onClick={handleChackTask} className="h-zoom me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>)
                            }

                            <i onClick={handleDeleteTask} className="h-zoom me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                        </span>
                    </li>
                ))}
            </ul>
        );
    } else {
        return <h4 className="text-center text-danger mt-4">هیچ کاری ثبت نشده ...</h4>
    }
}

export default TaksItems;