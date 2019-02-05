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
                    <h2 className="display-4">{this.state.loadedDeal.name}</h2>
                    <hr className="my-4"/>
                    <p>Headquarters: {this.state.loadedDeal.city}</p>
                    <p>Primary Industry: {this.state.loadedDeal.industry}</p>
                    
                    <p>Descriptiopn: {this.state.loadedDeal.description}</p>
                </div>
                <div className="jumbotron DealDetails">
                    <h2 className="display-4 heading">Deal Details</h2>
                    <hr className="my-4"/>
                    <p>Amount Raised: {(this.state.loadedDeal.raised).toLocaleString()}</p>
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