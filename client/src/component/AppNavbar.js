import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Nav, Navbar} from "reactstrap";
import LoginModal from "./auth/LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT_REQUEST} from "../redux/types";
//Link version error
//import {Link} from "react-router-dom";

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

    return (
        <Fragment>
            <Navbar color="dark" dark expand="lg" className="sticky-top">
                <a href="/" className="text-white text-decoration-none">
                    project my blog(kwon's blog)
                </a>
                <Nav>
                    {
                        isAuthenticated ?
                        (<h1 className="text-white">authenticated</h1>)
                        :
                        (<LoginModal/>)
                    }
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default AppNavbar;

