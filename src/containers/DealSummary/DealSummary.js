import React, {Component} from 'react';

import ThreadDisplay from '../../components/ThreadDisplay/ThreadDisplay';
import DealDetails from '../../components/DealDetails/DealDetails';
import axios from '../../axios-posts';

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
            <div>
                <DealDetails data={this.state.loadedDeal}/>
                <ThreadDisplay/>
            </div>
        );
    }
}

export default DealSummary;