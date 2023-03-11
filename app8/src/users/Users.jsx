import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css'
import swal from 'sweetalert';

const Users = ()=>{
    const naigate = useNavigate();
    const handleDelete = () =>{
       // swal("Here's the title!", "...and here's the text!");
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                    {/* در این حالت هم میشه پارامتر تحت عنوان استیت استفاده کرد */}
                    <Link to="/user/add" state={'param1'}>
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
                                    // در صورتی که بخوایم پارامتر های دیگه رو ارسال کنیم که توی یو ار ال هم نشون نده میشه یه آبجکت که مقدار استیت برابر اون چیزی که میخوایم باشه نوشت
                                    // دقت کن حتما باید نامش استیت باشه
                                    return naigate('/user/add/2', {state: {param1: 'param1', param2: 'param2'}});
                                }} className="fas fa-edit text-warning mx-2 pointer"></i>
                            <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDelete(1)}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Users;