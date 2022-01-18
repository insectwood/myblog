import React, {Fragment} from "react";
import {Row, Spinner} from "reactstrap";

export const BorderSpinner = (
    <Fragment>
        <Row className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
        </Row>
    </Fragment>
)