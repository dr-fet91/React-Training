import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css'
import swal from 'sweetalert';
import axios from 'axios';

const Users = () => {
    const naigate = useNavigate();
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const handleDelete = () => {
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
                    <input type="text" className="form-control shadow" placeholder="جستجو" />
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
            {users ? (
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
                    {users.map(u => (
                        <tbody key={u.id}>
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>

                                    <i onClick={() => {
                                        return naigate('/user/add/2', { state: { param1: 'param1', param2: 'param2' } });
                                    }} className="fas fa-edit text-warning mx-2 pointer"></i>
                                    <i className="fas fa-trash text-danger mx-2 pointer" onClick={() => handleDelete(1)}></i>
                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            ) : (
                <h4 className='text-info text-center'>موردی یافت نشد</h4>
            )}

        </div>
    )

}

export default Users;