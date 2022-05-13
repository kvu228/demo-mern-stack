import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function formatGia(gia) {
    return Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
    }).format(gia);
}

const DisplayFindHoa = () => {
    const [listHoa, setListHoa] = useState([]);

    const [query, setQuery] = useState(useParams().query);

    const fetchListHoa = async () => {
        const { data } = await axios.get(
            `/api/tim-hoa${typeof query === "undefined" ? "" : "/" + query}`,
        );
        console.log(query);
        setListHoa(data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/tim-hoa/" + query;
    };

    useEffect(() => {
        fetchListHoa();
        console.log(listHoa);
    }, [query]);

    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <form className='input-group m-3' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Search'
                            value={query}
                            onChange={async (e) => {
                                setQuery(e.target.value);
                            }}
                        />
                        <button className='btn btn-success' type='submit'>
                            Search
                        </button>
                    </form>
                </div>
            </div>
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
        </React.Fragment>
    );
};

export default DisplayFindHoa;
