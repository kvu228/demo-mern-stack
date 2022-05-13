import express from "express";
import hoaRoutes from "./routes/hoaRoutes.js";
import loaiHoaRoutes from "./routes/loaiHoaRoutes.js";
import findHoaRoutes from "./routes/findHoaRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "../backend/config/db.js";
import expressAsyncHandler from "express-async-handler";
import bodyParser from "body-parser";

import LoaiHoa from "./model/loaiHoaModel.js";
// import User from "./model/userModel.js";

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get(
    "/api",
    expressAsyncHandler(async (req, res) => {
        const loaiHoa = await LoaiHoa.find({});
        res.json(loaiHoa);
    }),
);

app.use("/api/loai-hoa", loaiHoaRoutes);

app.use("/api/hoa", hoaRoutes);

app.use("/api/tim-hoa", findHoaRoutes);

app.use("/dang-nhap", userRoutes);

let port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
