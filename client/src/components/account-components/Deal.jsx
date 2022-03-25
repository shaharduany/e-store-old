import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Deal(props) {
    const values = props.values;

    const info = values.info;
    const items = values.items;
    const date = values.date;
    
    return(<div>
        <Row>
            <Col xs={3}>
                {info && <div>
                    <p>Deliver to: {info.name} <br />
                    At address: {info.address} <br />
                    </p>    
                </div>}
                {date && <p>Purchased at: {date.toString()}</p>}
            </Col>
            <Col xs={9}>
                {items && items.map((value, index) => <p>{value.amount}x{value.item.name}</p>)}
            </Col>
        </Row>
        <hr />
    </div>)
}