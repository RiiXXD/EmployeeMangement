import {Route,Routes}  from "react-router";
import Home from "../Pages/Home";
export default function AllRoutes(){
    return <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>

    <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes></>
}