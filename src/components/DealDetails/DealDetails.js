import React, {Component} from 'react';

import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxilary/Aux';
import './DealDetails.css';

class DealDetails extends Component {
    state = {
        loadedDeal: null,
        loading: true
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.setState({loadedDeal: this.props.data.dealData, loading: false})
        }
        console.log(this.state.loadedDeal)
    }

    render() {
        let details = (
                <div className="jumbotron DealDetails">
                    <h2 className="display-4">Company Profile</h2>
                </div>);

        if (this.state.loadedDeal) {
            details = (
            <Aux>
                <div className="jumbotron DealDetails">
                    <h2 className="display-4">Company Profile</h2>
                    <hr className="my-4"/>
                    <p className="lead">{this.state.loadedDeal.name}</p>
                    <p>Headquarters: {this.state.loadedDeal.city}</p>
                    <p>Primary Industry: {this.state.loadedDeal.industry}</p>
                    <p>Amount Raised: {this.state.loadedDeal.raised}</p>
                    <p>Descriptiopn: {this.state.loadedDeal.description}</p>
                </div>
                <div className="jumbotron DealDetails">
                    <h2 className="display-4 heading">Deal Details</h2>
                    <hr className="my-4"/>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </Aux>
            );

        }

        if (this.state.loading) {
            details=<Spinner/>;
        }

        return (
            <div>
                {details}
            </div>
        )
    }
}

export default DealDetails; 