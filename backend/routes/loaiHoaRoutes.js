import express from "express";
import expressAsyncHandler from "express-async-handler";

// import Hoa from "../data/hoa.js";
// import LoaiHoa from "../data/loaihoa.js";

import Hoa from "../model/hoaModel.js";
import LoaiHoa from "../model/loaiHoaModel.js";

const router = express.Router();

//Fetch all Hoa
router.get(
    "/",
    expressAsyncHandler(async (req, res) => {
        //This line is used for sample data to test backend fetching
        // const allHoa = await Hoa;

        const allHoa = await Hoa.find({});
        res.json(allHoa);
    }),
);

//Fetch Hoa with LoaiHoa
router.get(
    "/:loaiHoaAnchor",
    expressAsyncHandler(async (req, res) => {
        //Those lines are used for sample data to test backend fetching
        // const maLoaiHoaID = getMaLoaiHoa(req.params.loaiHoaAnchor);
        // const listLoaiHoa = await Hoa.filter(
        //     (hoa) => hoa.maloai === maLoaiHoaID,
        // );

        const loaiHoa = await LoaiHoa.findOne({
            anchor: req.params.loaiHoaAnchor,
        }).exec();
        const maLoaiHoaID = loaiHoa.maloai;

        const listHoa = await Hoa.find({
            maloai: maLoaiHoaID,
        }).exec();
        res.json(listHoa);
    }),
);

export default router;

//This line is used for sample data to test backend fetching
// function getMaLoaiHoa(loaiHoaAnchor) {
//     let temp = LoaiHoa.find((loaiHoa) =>
//         loaiHoa.anchor.includes(loaiHoaAnchor),
//     );
//     return temp.maloai;
// }
