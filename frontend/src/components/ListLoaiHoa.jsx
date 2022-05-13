import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { getListLoaiHoa } from "../resources/data/loaihoa";

const ListLoaiHoa = () => {
    // const loaiHoa = getListLoaiHoa();
    const sideBarImgURL = "https://picsum.photos/500";

    const [loaiHoa, setLoaiHoa] = useState([]);

    useEffect(() => {
        const fetchLoaiHoa = async () => {
            const { data } = await axios.get(`/api`);
            setLoaiHoa(data);
        };
        fetchLoaiHoa();
    }, []);

    return (
        <React.Fragment>
            {loaiHoa.map((loaiHoa) => (
                <div key={loaiHoa.maloai}>
                    <Link
                        //  {"loai-hoa" + loaiHoa.anchor}
                        to={`/loai-hoa/${loaiHoa.anchor}`}
                        className='text-success'
                        key={loaiHoa.maloai}
                    >
                        <p className='text-start'>{loaiHoa.tenloai}</p>
                    </Link>
                    {/* <a
                        href={loaiHoa.anchor}
                        className='text-success'
                        key={loaiHoa.maloai}
                    >
                        <p className='text-start'>{loaiHoa.tenloai}</p>
                    </a> */}
                </div>
            ))}
            <img src={sideBarImgURL} alt='' className='img-fluid' />
        </React.Fragment>
    );
};

export default ListLoaiHoa;
