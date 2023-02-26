import { Component, createRef } from "react";
import Fcomponent from "./Fcomponent";
import PureCompo from "./PureCompo";



class PrentCompo extends Component {
    constructor(){
        super();
        this.myInput = createRef();
    }
    
    componentDidMount(){
        this.myInput.current.focus();
    }
    render() {
        return (
            <div className="container">
                {/* <PureCompo ref={this.componentRef} /> */}
                <Fcomponent ref={this.myInput} />
                <button onClick={this.handleChangeCompoName} className="btn btn-info mx-auto">submit from parent component</button>
            </div>

        );
    }
}

export default PrentCompo;
