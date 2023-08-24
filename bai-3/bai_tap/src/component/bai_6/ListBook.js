import {useEffect, useState} from "react"
import * as bookService from "../../service/BookManagementService"
import {addTodo, getAll} from "../../service/TodoListService";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import axios from "axios";

export function ListBook(){
    const [books,setBooks] = useState([])

    useEffect(()=>{
        getAll();
    },[])
    const getAll=async ()=>{
        const result=await  bookService.getAll();
        setBooks((prev)=>result)
    }
    const deleteBook = async (id) =>{
        await axios.delete(`http://localhost:8080/books/${id}`);
        getAll();
        await alert("Xoá thành công ");
    }
    return(
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
                books.map((element)=>(
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.quantity}</td>
                        <td><Link to={`/books/${element.id}`}>Sửa</Link></td>
                        <td><button onClick={() => deleteBook(element.id)}>Xóa</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    )
}