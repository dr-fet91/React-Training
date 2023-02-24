
import { createRef, PureComponent } from "react";

class PureCompo extends PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
        }
        this.counter = 0;
        this.myInput = createRef();
    }
    handleChangeName = () => {
        this.setState({
           // name: document.getElementById('myInput').value,
            name: this.myInput.current.value,
        });
    }
    componentDidMount(){
        this.myInput.current.focus();
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="mt-4">
                        <div className="mb-3">
                            <h4 className="text-dark text-center">حدث کلمه</h4>
                            <input ref={this.myInput} type="text" id="myInput" className="form-control" />
                        </div>
                        <div className="mb-3 justify-content-center d-flex">
                            <button onClick={()=>{this.myInput.current.value = ''}} className="btn btn-secondary m-1">مخفی</button>
                            <button onClick={this.handleChangeName} className="btn btn-warning m-1">ثبت</button>
                        </div>
                    </div>
                    <span className="d-block text-center">{this.counter++}</span>
                </div>
            </div>
        );
    }
}


export default PureCompo;



