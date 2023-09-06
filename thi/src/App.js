import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/List";
import Edit from "./component/Edit";
import Create from "./component/Create";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/sanPham"} element={<List/>}></Route>
                    <Route path={"/create"} element={<Create/>}></Route>
                    <Route path={"/sanPham/:id"} element={<Edit/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
