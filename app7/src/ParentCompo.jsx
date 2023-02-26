import { Component, createRef } from "react";
import PureCompo from "./PureCompo";



class PrentCompo extends Component {
    constructor(){
        super();
        this.componentRef = createRef();
    }
    handleChangeCompoName = () =>{
        this.componentRef.current.handleChangeName();
    }
    render() {
        console.log(this.componentRef);
        return (
            <div className="container">
                <PureCompo ref={this.componentRef} />
                <button onClick={this.handleChangeCompoName} className="btn btn-info mx-auto">submit from parent component</button>
            </div>

        );
    }
}

export default PrentCompo;
