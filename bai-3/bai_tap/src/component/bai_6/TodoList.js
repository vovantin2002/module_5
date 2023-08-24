import {useEffect, useState} from "react"
import * as todoService from "../../service/TodoListService"
import {addTodo, getAll} from "../../service/TodoListService";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

export function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAll();
    }, [])
    const result = todoService.getAll();
    const getAll = async () => {
        const result = await todoService.getAll();
        setTodos((prev) => result.data);
    }
    return (
        <>
            <Formik initialValues={{
                name: ''
            }
            }
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required("Require")
                        })
                    }
                    onSubmit={async (values) => {
                        console.log(values);
                        await addTodo(values);
                        await  getAll();
                        alert(result.status)
                    }
                    }>
                <Form>
                    <h1>Danh sách công việc</h1>
                    <Field id="todoName" name="name"></Field>
                    <button type="submit">Add</button>
                </Form>
            </Formik>

            <ul>
                {
                    todos.map((element) => (
                            <li key={element.id}>{element.name}</li>
                        )
                    )}
            </ul>
        </>
    )
}