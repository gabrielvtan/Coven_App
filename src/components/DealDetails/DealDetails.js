import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary/Aux';
import './DealDetails.css';

class DealDetails extends Component {
    render() {
        return (
            <Aux>
                <div className="jumbotron DealDetails">
                    <h2 className="display-4">Company Profile</h2>
                    <hr className="my-4"/>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
                <div className="jumbotron DealDetails">
                    <h2 className="display-4 heading">Deal Details</h2>
                    <hr className="my-4"/>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </Aux>
        )
    }
}

export default DealDetails; 