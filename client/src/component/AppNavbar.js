import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Button, Nav, Navbar, NavItem, Form} from "reactstrap";
import LoginModal from "./auth/LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT_REQUEST} from "../redux/types";
import RegistModal from "./auth/RegistModal";
//Link version error
import {Link} from "react-router-dom";

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isAuthenticated, user, userRole} = useSelector((state) => state.auth)

    //console.log(userRole, "UserRole");
    const dispatch = useDispatch();

    //https://reactjs.org/docs/hooks-reference.html#usecallback
    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST
        })
    }, [dispatch])

    useEffect(() => {
        setIsOpen(false)
    }, [user])

    const addPostClick = () => {

    }

    const authLink = (
        <Fragment>
            <NavItem>
                {userRole === "admin" ? (
                    <Form className="col mt-2">
                        <a href="post" className="btn btn-success block text-white px-3" onClick={addPostClick}>
                            Add Post
                        </a>
                    </Form>
                ): ""}
            </NavItem>
            <NavItem className="d-flex justify-content-center">
                <Form className="col mt-2">
                    {user && user.name? (
                            <Button outline color="light" className="px-3" block>
                                <strong>{user ?  `Welcome ${user.name}`: ""}</strong>
                            </Button>
                    ): (
                        <Button outline color="light" className="px-3" block>
                            <strong>"no user"</strong>
                        </Button>
                    )}
                </Form>
            </NavItem>
            <NavItem>
                <Form className="col">
                    <a href="#" onClick={onLogout}>
                        <Button outline color="light" className="mt-2" block>
                            Logout
                        </Button>
                    </a>
                </Form>
            </NavItem>
        </Fragment>
    )

    const guestLink = (
        <Fragment>
            <NavItem>
                <RegistModal/>
            </NavItem>
            <NavItem>
                <LoginModal/>
            </NavItem>
        </Fragment>
    )

    return (
        <Fragment>
            <Navbar color="dark" dark expand="lg" className="sticky-top">
                <a href="/" className="text-white text-decoration-none">
                    project my blog(kwon's blog)
                </a>
                <Nav>
                    {
                        isAuthenticated ?
                        (authLink)
                        :
                        (guestLink)
                    }
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default AppNavbar;

