import React from 'react';
import Header from './Header';

export default (props) => {
    return (
        <div>
            <Header/> <br/> <br/>
            {props.children}
        </div>
    )
}
