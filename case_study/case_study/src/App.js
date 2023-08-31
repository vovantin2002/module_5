import logo from './logo.svg';
import './App.css';
import EditService from './component/service/villa/Edit';
import EditRoom from './component/service/room/EditRoom';
import EditContract from './component/contract/Edit';
import EditCustomer from './component/customer/Edit';
import CreateCustomer from './component/customer/Create';
import ListRoom from "./component/service/room/ListRoom";
import ListHouse from "./component/service/house/ListHouse";
import ListVilla from "./component/service/villa/ListVilla";
import ListContract from "./component/contract/List";
import ListCustomer from "./component/customer/List";
import CreateRoom from "./component/service/room/CreateRoom";
import CreateHouse from "./component/service/house/CreateHouse";
import CreateVilla from "./component/service/villa/CreateVilla";
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
                {/*room*/}
                <Route path="/room" element={<ListRoom/>}></Route>
                <Route path="/room/:id" element={<EditRoom/>}></Route>
                <Route path="/room/create" element={<CreateRoom/>}></Route>
                {/*house*/}
                <Route path="/house" element={<ListHouse/>}></Route>
                <Route path="/house/:id" element={<EditService/>}></Route>
                <Route path="house/create" element={<CreateHouse/>}></Route>
                {/*villa*/}
                <Route path="/villa" element={<ListVilla/>}></Route>
                <Route path="/villa/:id" element={<EditService/>}></Route>
                <Route path="villa/create" element={<CreateVilla/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}
export default App;
