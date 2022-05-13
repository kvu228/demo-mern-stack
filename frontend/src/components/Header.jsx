import React, { Component } from "react";
import { Link } from "react-router-dom";
import DangNhap from "./DangNhap";

class Header extends Component {
    state = {
        logoURL: "https://picsum.photos/500/300?random=",
        paymentMethods: [
            {
                vendorName: "Master",
                vendorLogoURL:
                    "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png",
            },
            {
                vendorName: "Visa",
                vendorLogoURL:
                    "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
            },
        ],
    };
    render() {
        let randomNum = Math.floor(Math.random() * 100);

        const displayPaymentLogo = this.state.paymentMethods.map((payment) => (
            <div key={payment.vendorName} className='col-auto'>
                <img
                    className='img-fluid'
                    src={payment.vendorLogoURL}
                    alt=''
                    style={{ width: "50px" }}
                />
            </div>
        ));

        return (
            <div className='row bg-success bg-opacity-25'>
                <div className='col-2 p-0'>
                    <Link to={`/`}>
                        <img
                            src={this.state.logoURL.concat(randomNum)}
                            alt=''
                            className='img-fluid'
                        />
                    </Link>
                </div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='fw-bold text-success'>
                                (084) 966 911 xxx
                            </p>
                            <p>(Giờ mở cửa: 08h00 - 22h00 mỗi ngày)</p>
                            <a
                                href='mailto:kietvu.228@gmail.com'
                                className='text-success'
                            >
                                <p>VuTuanKiet-20520018@example.com</p>
                            </a>
                            <a href='#' className='text-success'>
                                <p>hoadep.com.vn</p>
                            </a>
                        </div>
                        <DangNhap />
                        <div className='col-4'>
                            <p className='text-center text-success fw-bold'>
                                Có thể thanh toán bằng
                            </p>
                            <div className='row d-flex justify-content-center'>
                                {displayPaymentLogo}
                            </div>
                            <p className='text-center'>
                                Xin chào <b>Vũ Tuấn Kiệt</b>
                            </p>
                            <a href='#' className='text-success'>
                                <p className='text-center'>Thoát đăng nhập</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
