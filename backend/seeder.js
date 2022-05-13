import mongoose from "mongoose";

import hoa from "./data/hoa.js";
import loaiHoa from "./data/loaihoa.js";
import user from "./data/user.js";

import Hoa from "./model/hoaModel.js";
import LoaiHoa from "./model/loaiHoaModel.js";
import User from "./model/userModel.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
    try {
        await Hoa.deleteMany();
        await LoaiHoa.deleteMany();
        await User.deleteMany();

        const sampleHoa = hoa;
        await Hoa.insertMany(sampleHoa);

        const sampleLoaiHoa = loaiHoa;
        await LoaiHoa.insertMany(sampleLoaiHoa);

        const sampleUser = user;
        await User.insertMany(sampleUser);

        console.log("Data imported!");
        process.exit();
    } catch (error) {
        console.error(`Import data has error:${error}`);
        process.exit(1);
    }
};

const detroyData = async () => {
    try {
        await Hoa.deleteMany();
        await LoaiHoa.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!");
        process.exit();
    } catch (error) {
        console.error(`Destroy data has error:${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    detroyData();
} else {
    importData();
}
