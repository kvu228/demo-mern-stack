import React, { useEffect, useState } from "react";
import axios from "axios";

const DangNhap = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    const login = async (event) => {
        event.preventDefault();
        const user = await axios({
            method: "post",
            url: "/dang-nhap",
            data: {
                username: uname,
                password: pass,
            },
        });
        console.log(user);
        user.data != null
            ? window.alert(
                  "Đăng nhập thành công!\nXin chào " + user.data.fullname,
              )
            : window.alert("Đăng nhập thất bại");
    };

    return (
        <React.Fragment>
            <div className='col-4'>
                <p className='text-center text-success fw-bold'>Đăng nhập</p>
                <form onSubmit={login}>
                    <div class='row g-3 align-items-center'>
                        <div class='col-4'>
                            <label
                                for='inputusername'
                                className='col-form-label'
                            >
                                Tên đăng nhập
                            </label>
                        </div>
                        <div className='col-8'>
                            <input
                                type='text'
                                name='uname'
                                required
                                value={uname}
                                className='form-control'
                                onChange={(e) => setUname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class='row g-3 align-items-center'>
                        <div class='col-4'>
                            <label
                                for='inputpassword'
                                className='col-form-label'
                            >
                                Password
                            </label>
                        </div>
                        <div className='col-8'>
                            <input
                                type='password'
                                name='pass'
                                required
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-success my-2'>
                        Submit
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default DangNhap;
