import React, { useState, useEffect } from "react";
// import { getAllHoa } from "../resources/data/hoa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function formatGia(gia) {
    return Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
    }).format(gia);
}

const DisplayHoa = () => {
    // Those lines are used to test fetching data inside Frontend
    // const hoaID = parseInt(useParams().hoaID);
    // const hoa = getAllHoa().find((hoa) => hoa.mahoa === hoaID);

    const hoaID = useParams().hoaID;
    const [hoa, setHoa] = useState({});
    const fetchHoa = async () => {
        const { data } = await axios.get(`/api/hoa/${hoaID}`);
        setHoa(data);
    };

    useEffect(() => {
        fetchHoa();
    }, [hoaID]);

    return (
        <div className='row d-flex justify-content-center p-5'>
            <div className='col-auto'>
                <img src={hoa.hinh} alt='' className='img-fluid' />
            </div>
            <div className='col-auto'>
                <p className='fw-bold'>{hoa.tenhoa}</p>
                <p className='fst-italic'>{formatGia(hoa.dongia)}</p>
                <p className='fst-italic'>{hoa.mota}</p>
                <Link className='text-success' to='/'>
                    Quay về trang chính
                </Link>
            </div>
        </div>
    );
};

export default DisplayHoa;
