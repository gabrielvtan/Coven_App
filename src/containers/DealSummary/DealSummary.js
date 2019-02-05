import React, {Component} from 'react';

import ThreadDisplay from '../../components/ThreadDisplay/ThreadDisplay';
import DealDetails from '../../components/DealDetails/DealDetails';

class DealSummary extends Component {
    render () {
        return (
            <div>
                <DealDetails/>
                <ThreadDisplay/>
            </div>
        );
    }
}

export default DealSummary;