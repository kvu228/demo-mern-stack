import React from "react";
import { Route, Routes } from "react-router-dom";

import DisplayListHoa from "../routes/displayListHoa";

import DisplayHoa from "../routes/displayHoa";
import DisplayFindHoa from "../routes/displayFindHoa";

const Content = () => {
    return (
        <div className='row'>
            <React.Fragment>
                <Routes>
                    <Route path='/' element={<DisplayListHoa />} />
                    <Route path='loai-hoa'>
                        <Route
                            path=':loaiHoaAnchor'
                            element={<DisplayListHoa />}
                        />
                    </Route>
                    <Route path='/hoa/'>
                        <Route path=':hoaID' element={<DisplayHoa />} />
                    </Route>
                    <Route path='/tim-hoa/' element={<DisplayFindHoa />}>
                        <Route path=':query' element={<DisplayFindHoa />} />
                    </Route>
                    <Route
                        path='*'
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </React.Fragment>
        </div>
    );
};

export default Content;
