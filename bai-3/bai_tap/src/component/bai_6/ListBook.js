import React, {useEffect, useState} from 'react';
import * as bookService from "../../service/BookManagementService"
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";

export function ListBook() {

    const [books, setBooks] = useState([])
    const [object, setObject] = useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const result = await bookService.getAll();
        setBooks((prev) => result)
    }
    let flag = false;
    const deleteBook = async (id) => {
        await bookService.deleteBook(id);
        getAll();
        await alert("Xoá thành công ");
        setOpen(false);
    }
    const infoDelete = async (book) => {
        setOpen(true)
        setObject(book);
    }
    return (
        <>
            <h1>Danh sach </h1>
            <Link to="/add">Them moi</Link>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.quantity}</td>
                            <td><Link to={`/books/${element.id}`}>Sửa</Link></td>
                            <td>
                                <button onClick={() => infoDelete(element)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Modal
                show={open}
                onHide={() => {
                    setOpen(false);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>Xóa sách</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn có muốn xóa sách {object.title}</p>
                    <button onClick={() => deleteBook(object.id)}>
                        Xóa
                    </button>
                </Modal.Body>
            </Modal>
        </>
    )
}