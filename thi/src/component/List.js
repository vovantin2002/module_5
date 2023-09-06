import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List() {
    const [sanPhams, setSanPhams] = useState([])
    const [page, setPage] = useState(0);
    const [loais, setLoais] = useState([])
    const [name, setName] = useState("")
    const [productType, setProductType] = useState("")
    const layLoai = async () => {
        const result = await axios.get(`http://localhost:8080/productType`)
        setLoais(result.data)
    }
    useEffect(() => {
        layLoai()
    }, [])
    const laySanPham = async (page) => {
        const result = await axios.get(`http://localhost:8080/product?name=${name}&productType=${productType}&page=${page}`);
        console.log(result.data);
        setSanPhams(result.data.content);
    };
    useEffect(() => {
        laySanPham(page);
    }, [page, name, productType]);
    const handlePrevious = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        setPage(page + 1);
    };
    const search = async () => {
        const name = document.getElementById("name").value
        const id = document.getElementById("id").value
        console.log(name)
        console.log(id)
        setName(name)
        setProductType(id)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/product/${id}`)
        await laySanPham()
        await alert("Xoa thanh cong")
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>TRANG DANH SÁCH</h1>
            <h3>
                <Link to={"/create"}>
                    <button className="btn btn-primary">Create</button>
                </Link>
            </h3>
            <form>
                <input type="text" name="name" id="name"

                />
                <select name="productType" id="id">
                    <option value={productType}>chon loai</option>
                    {
                        loais.map((loai) => (
                            <option key={loai.id} value={loai.id}>{loai.name}</option>
                        ))
                    }
                </select>
                <button onClick={search} type="button"
                >Tim kiem
                </button>
            </form>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Ma san phẩm</th>
                    <th>Tên</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại</th>
                    <th>Sửa</th>
                    <th>Xoa</th>
                </tr>
                </thead>
                <tbody>
                {sanPhams.length > 0 &&
                    sanPhams.map((sanPham) => (
                        <tr key={sanPham.id}>
                            <td>{sanPham.id}</td>
                            <td>{sanPham.name}</td>
                            <td>{sanPham.dateAdded}</td>
                            <td>{sanPham.quantity}</td>
                            <td>{sanPham.productType.name}</td>
                            <td>
                                <Link to={`/sanPham/${sanPham.id}`}>
                                    <button className="btn btn-primary">
                                        Sua
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    deleteProduct(sanPham.id);
                                }
                                }>Xoa
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <button onClick={handlePrevious} className="btn btn-primary">
                Previous
            </button>
            <span className="fw-bolder fs-5 d-inline-block m-3" style={{color: "blue"}}>
            {page + 1}
            </span>
            <button onClick={handleNext} className="btn btn-primary">
                Next
            </button>
        </>
    )
}

