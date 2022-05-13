import express from "express";
import expressAsyncHandler from "express-async-handler";
import Hoa from "../model/hoaModel.js";

const router = express.Router();

router.get(
    "/",
    expressAsyncHandler(async (req, res) => {
        const hoaResult = await Hoa.find({});
        res.json(hoaResult);
    }),
);

router.get(
    "/:query",
    expressAsyncHandler(async (req, res) => {
        const params = req.params.query;
        console.log(params);
        const hoaResult = await Hoa.find().or([
            {
                tenhoa: { $regex: params, $options: "i" },
            },
            { mota: { $regex: params, $options: "i" } },
        ]);
        res.json(hoaResult);
    }),
);

export default router;
