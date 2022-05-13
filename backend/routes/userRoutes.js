import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";

import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post(
    "/",
    expressAsyncHandler(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body);
        const user = await User.findOne({
            username: username,
            password: password,
        }).lean();
        user ? res.json(user) : res.json(null);
    }),
);

export default router;
