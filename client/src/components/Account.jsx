import React from 'react';
import { getCurrentUser } from '../scripts/api-scripts';

const Account = (props) => {
    
    const displayClick = () => {
        alert(getCurrentUser());
    }

    return (<div className='account-div'>
            <input type="button" value="display" onClick={displayClick} />
    </div>);
};

export default Account;