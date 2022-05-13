let listLoaiHoa = [
    {
        maloai: 1,
        tenloai: "Hoa cúc",
        anchor: "hoa-cuc",
    },
    {
        maloai: 2,
        tenloai: "Hoa cưới",
        anchor: "hoa-cuoi",
    },
    {
        maloai: 3,
        tenloai: "Hoa hồng",
        anchor: "hoa-hong",
    },
    {
        maloai: 4,
        tenloai: "Hoa xuân",
        anchor: "hoa-xuan",
    },
];

export function getListLoaiHoa() {
    return listLoaiHoa;
}

export function getMaLoaiHoa(loaiHoaAnchor) {
    let temp = listLoaiHoa.find((loaiHoa) =>
        loaiHoa.anchor.includes(loaiHoaAnchor),
    );
    if (temp.maloai) {
        return temp.maloai;
    } else {
        return "";
    }
}
