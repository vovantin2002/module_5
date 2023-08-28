import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export const getAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const addBook = async (book) => {
    try {
        const result = await axios.post('http://localhost:8080/books', book)
        return result.data;
    } catch (e) {

    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (e) {
    }
}