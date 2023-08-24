import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export const getAll= async ()=> {
    try {
        const result = await axios.get('http://localhost:8080/books');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const addBook=async (book)=>{
    try{const  result=await  axios.post('http://localhost:8080/books', book)
        return result.data;
    }catch (e){

    }
}
export const editBook=async (id,book)=>{
    try{const  result=await  axios.put('http://localhost:8080/books/'+id, book)
        return result.data;
    }catch (e){

    }
}