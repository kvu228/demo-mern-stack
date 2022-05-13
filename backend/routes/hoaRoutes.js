import express from "express";
import expressAsyncHandler from "express-async-handler";
// import Hoa from "../data/hoa.js";
import Hoa from "../model/hoaModel.js";

const router = express.Router();

// Fetch single Hoa
router.get(
    "/:hoaID",
    expressAsyncHandler(async (req, res) => {
        //This line is used for sample data to test backend fetching
        // const hoa = await Hoa.find((hoa) => hoa.mahoa == req.params.hoaID);

        const hoa = await Hoa.findOne({ mahoa: req.params.hoaID }).lean();

        if (hoa) {
            res.json(hoa);
            console.log("Hinh URL: " + hoa.hinh.concat(hoa.mahoa));
        } else {
            res.status(404).json({ message: "Không có hoa này" });
        }
    }),
);

export default router;
