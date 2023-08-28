import './App.css';
import {Contact} from './component/Contact';
import Counter from './component/Counter';
import Todo from './component/Todo';
import {MedicalDeclaration} from "./component/MedicalDeclaration";
import {TodoList} from "./component/bai_6/TodoList";
import {ListBook} from "./component/bai_6/ListBook";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateBook} from "./component/bai_6/CreateBook";
import {EditBook} from "./component/bai_6/EditBook";
import {Provider} from "react-redux";

import React from 'react';
import UserList from "./component/bai_7/UserList";

function App() {
    return (
        <>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/books" element={<ListBook/>}></Route>*/}
            {/*        <Route path="/books/:id" element={<EditBook/>}></Route>*/}
            {/*        <Route path="/add" element={<CreateBook/>}></Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            {/*<Counter/>*/}
            {/*<Contact/>*/}
            {/*   <MedicalDeclaration/>*/}
            <div className="container">
                <div  style={{marginTop: 40}}>
                    <div>
                        <UserList />
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
