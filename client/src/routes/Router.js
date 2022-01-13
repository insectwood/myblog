import React, {Fragment} from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import AppNavbar from "../component/AppNavbar";
import {Container} from "reactstrap";
import {Redirect, Route, Switch} from "react-router-dom";
import PostCardList from "./route/PostCardList";
import PostWrite from "./route/PostWrite";
import PostDetail from "./route/PostDetail";
import CategoryResult from "./route/CategoryResult";
import Search from "./route/Search";

const MyRouter = () => (
    <Fragment>
        <AppNavbar/>
        <Header/>
        <Container id="main-body">
            <Switch>
                <Route path="/" exact component={PostCardList}/>
                <Route path="/post" exact component={PostWrite}/>
                <Route path="/post/:id" exact component={PostDetail}/>
                <Route path="/post/:category/:categoryName" exact component={CategoryResult}/>
                <Route path="/search/:searchTerm" exact component={Search}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Container>
        <Footer/>
    </Fragment>
)

export default MyRouter;