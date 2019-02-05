import React, {Component} from 'react';

import ThreadDisplay from '../../components/ThreadDisplay/ThreadDisplay';
import DealDetails from '../../components/DealDetails/DealDetails';
import axios from '../../axios-posts';
import Aux from '../../hoc/Auxilary/Aux';

import './DealSummary.css';

class DealSummary extends Component {
    state = {
        loadedDeal: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get('/deal-list/deal-summary/' + this.props.match.params.id + '.json')
                    .then(response => {
                        this.setState({loadedDeal: response.data});
                    });
            }
        }
    }
    
    render () {
        return (
            <Aux>
                <DealDetails data={this.state.loadedDeal}/>
                <h1 className="DealSummary">Enter Your Comments below Regarding this deal</h1>
                <ThreadDisplay/>
            </Aux>
        );
    }
}

export default DealSummary;