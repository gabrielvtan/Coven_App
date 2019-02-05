import React, { Component } from 'react';
import Deal from '../../components/Deal/Deal';
import axios from '../../axios-posts';
import {Link} from 'react-router-dom';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class DealList extends Component {
    state = {
        deals: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/deal-list/deal-summary.json')
            .then(res => {
                const fetchedDeals = [];
                for (let key in res.data) {
                    fetchedDeals.push({
                        ...res.data[key],
                        id: key 
                });
            }
            this.setState({loading:false, deals:fetchedDeals})
        })
        .catch(err => {
            console.log(err);
            this.setState({loading:false})
        })
    }
    
    dealSelectedHandler = (id) => {
        this.setState({selectedDealId: id});
    }

    render () {
            let deals = <p style={{textAlign: 'center'}}>404:SOMETHING WENT WRONG!</p>
            if (!this.state.loading) {
                deals = this.state.deals.map(deal => {
                    return (
                        <Link to={'/deal-list/deal-summary/' + deal.id} key={deal.id}>
                            <Deal 
                                name={deal.dealData.name}
                                city={deal.dealData.city}
                                industry={deal.dealData.industry}
                                description={deal.dealData.description}
                                raised={deal.dealData.raised}
                                clicked={() => this.dealSelectedHandler(deal.id)}/>
                        </Link>);
                });
            }
            return (
                <section>
                    {deals}
                </section>
            );
}}

export default withErrorHandler(DealList, axios);