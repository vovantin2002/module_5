import logo from './logo.svg';
import './App.css';
import EditService from './component/service/Edit';
import EditContract from './component/contract/Edit';
import EditCustomer from './component/customer/Edit';
import CreateCustomer from './component/customer/Create';
import ListService from "./component/service/List";
import ListContract from "./component/contract/List";
import ListCustomer from "./component/customer/List";
import CreateService from "./component/service/Create";
import CreateContract from "./component/contract/Create";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Header/>
        {/*customer*/}
        <BrowserRouter>
            <Routes>
                <Route path="/customer" element={<ListCustomer/>}></Route>
                <Route path="/customer/:id" element={<EditCustomer/>}></Route>
                <Route path="/create" element={<CreateCustomer/>}></Route>
            </Routes>
        </BrowserRouter>


        {/*contract*/}
        <BrowserRouter>
            <Routes>
                <Route path="/contract" element={<ListContract/>}></Route>
                <Route path="/contract/:id" element={<EditContract/>}></Route>
                <Route path="/create" element={<CreateContract/>}></Route>
            </Routes>
        </BrowserRouter>

        {/*service*/}
        <BrowserRouter>
            <Routes>
                <Route path="/service" element={<ListService/>}></Route>
                <Route path="/service/:id" element={<EditService/>}></Route>
                <Route path="service/create" element={<CreateService/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}
export default App;
