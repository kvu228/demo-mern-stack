import mongoose from "mongoose";

const hoaSchema = mongoose.Schema({
    mahoa: {
        type: Number,
        required: true,
        unique: true,
    },
    maloai: {
        type: Number,
        required: true,
        ref: "LoaiHoa",
    },
    tenhoa: {
        type: String,
        required: true,
    },
    dongia: {
        type: Number,
        required: true,
        default: 0,
    },
    hinh: {
        type: String,
    },
    mota: {
        type: String,
    },
});

const Hoa = mongoose.model("Hoa", hoaSchema);
export default Hoa;
