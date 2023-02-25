import { forwardRef, useEffect, useRef, useState } from "react"

let counter = 0;
const Fcomponent = (prop, ref) => {
    const [name, setName] = useState('');
   // let myInput = useRef();
    const handleChangeName = () => {
        setName(ref.current.value);
    }
    // useEffect(() => {
    //     myInput.current.focus();
    // }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="mt-4">
                    <div className="mb-3">
                        <h4 className="text-dark text-center">حدث کلمه</h4>
                        <input ref={ref} autoComplete="off" type="text" id="myInput" className="form-control" />
                    </div>
                    <div className="mb-3 justify-content-center d-flex">
                        <button onClick={() => { ref.current.value = '' }} className="btn btn-secondary m-1">مخفی</button>
                        <button onClick={handleChangeName} className="btn btn-warning m-1">ثبت</button>
                    </div>
                </div>
                <span className="d-block text-center">{counter++}</span>
            </div>
        </div>
    );
}

export default forwardRef(Fcomponent);