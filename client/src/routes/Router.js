import React, {Fragment} from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import AppNavbar from "../component/AppNavbar";

const MyRouter = () => (
    <Fragment>
        <AppNavbar/>
        <Header/>
        <h1>Body</h1>
        <Footer/>
    </Fragment>
)

export default MyRouter;