import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function formatGia(gia) {
    return Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
    }).format(gia);
}

const DisplayListHoa = () => {
    // Those lines are used to test fetching data inside Frontend
    // let listHoa;
    // let params = useParams();
    // if (window.location.href.includes("loai-hoa")) {
    //     let maLoaiHoaID = getMaLoaiHoa(params.loaiHoaAnchor);
    //     console.log(maLoaiHoaID);
    //     listHoa = getAllHoa().filter((hoa) => hoa.maloai === maLoaiHoaID);
    // } else {
    //     listHoa = getAllHoa();
    // }

    const loaiHoaAnchor = useParams().loaiHoaAnchor;
    const [listHoa, setListHoa] = useState([]);

    const fetchListHoa = async () => {
        const { data } = await axios.get(
            `/api/loai-hoa${
                typeof loaiHoaAnchor === "undefined" ? "" : "/" + loaiHoaAnchor
            }`,
        );
        setListHoa(data);
    };

    useEffect(() => {
        fetchListHoa();
    }, [loaiHoaAnchor]);

    return (
        <div className='row'>
            {listHoa.map((hoa) => (
                <div key={hoa.mahoa} className='col-3 my-3'>
                    <Link to={`/hoa/${hoa.mahoa}`}>
                        <img
                            className='mx-auto d-block'
                            src={hoa.hinh.concat(hoa.mahoa)}
                            alt=''
                        />
                    </Link>

                    <Link
                        to={`/hoa/${hoa.mahoa}`}
                        className='text-success text-center'
                    >
                        <p className='h3 '>{hoa.tenhoa}</p>
                    </Link>
                    <p className='text-center'>{hoa.mota}</p>
                    <p className='text-center'>
                        Giá bán: {formatGia(hoa.dongia)} vnđ
                    </p>
                </div>
            ))}
        </div>
    );
};

export default DisplayListHoa;
