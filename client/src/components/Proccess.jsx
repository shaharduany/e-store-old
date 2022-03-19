import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const ROUTES = routes();

export default function Proccess(props) {
    const navigate = useNavigate();
    
    setTimeout(() => {
        navigate(ROUTES.homepage);
    }, 3000);

    return (<div>
        <Row>
            <Col></Col>
            <Col>
                <h1>Proccessing request</h1>
                <h5>Please wait...</h5>
            </Col>
            <Col></Col>
        </Row>
    </div>)
}