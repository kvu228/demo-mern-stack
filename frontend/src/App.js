import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Content from "./components/Content";
import ListLoaiHoa from "./components/ListLoaiHoa";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <NavBar />
            <div className='row'>
                <div className='col-2 bg-success bg-opacity-25'>
                    <ListLoaiHoa />
                </div>
                <div className='col-10'>
                    <Outlet />
                    <Content />
                </div>
            </div>
        </React.Fragment>
    );
}
