import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className='row bg-success bg-opacity-50'>
                <div className='col-2'>
                    <Link
                        to={`/`}
                        className='text-success fw-bold text-decoration-none'
                    >
                        Danh mục hoa
                    </Link>
                </div>
                <div className='col-10 d-flex justify-content-between'>
                    <Link
                        to={`/`}
                        className='text-success fw-bold text-decoration-none'
                    >
                        Trang chủ
                    </Link>
                    <Link to={"/tim-hoa"} className='text-success fw-bold mx-5'>
                        Tìm kiếm bó hoa
                    </Link>
                    <a href='#' className='text-success fw-bold mx-5'>
                        Thêm bó hoa mới
                    </a>
                    <a href='#' className='text-success fw-bold mx-5'>
                        Đăng ký mới
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;
