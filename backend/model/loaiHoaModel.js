import mongoose from "mongoose";

const loaiHoaSchema = mongoose.Schema({
    maloai: {
        type: Number,
        required: true,
        unique: true,
    },
    tenloai: {
        type: String,
        required: true,
        unique: true,
    },
    anchor: {
        type: String,
        required: true,
        unique: true,
    },
});

const LoaiHoa = mongoose.model("LoaiHoa", loaiHoaSchema);

export default LoaiHoa;
