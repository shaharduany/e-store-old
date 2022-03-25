import React from 'react';
import { Alert } from 'react-bootstrap';
import { getCurrentUser } from '../../scripts/api-scripts';
import Deal from './Deal';

export default function History(props){

    let user = props.user;
    const history = user.history;

    return (<div className="history-div">
        <Alert>
            <Alert.Heading>HISTORY</Alert.Heading>
            <hr />
            {history && history.map((value) => <Deal values={value} />)}
        </Alert>
    </div>)
}