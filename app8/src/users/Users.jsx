import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css'

const Users = ()=>{
    const naigate = useNavigate();
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/user/add">
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>qasem</td>
                        <td>qasemB</td>
                        <td>mahdicmptr@gmail.com</td>
                        <td>
                            
                                <i onClick={()=>{
                                    // برای اینکه قبل از رفتن به یک مسیر پردازشی انجام بشه میشه اینجوری نوشت البته میشه همینو توی یک تابع نوشت فرقی نداره!
                                    // اینجا مثلا کد پردازشی
                                    return naigate('/user/add/2');
                                }} className="fas fa-edit text-warning mx-2 pointer"></i>
                            <i className="fas fa-trash text-danger mx-2 pointer"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Users;