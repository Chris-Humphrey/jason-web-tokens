import React from 'react';
import requireAuth from '../requireAuth';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <h1>Feature Page - Protected</h1>
        );
    }
}



export default requireAuth(Feature)
