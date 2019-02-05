import React, { Component } from 'react';
import Deal from '../../components/Deal/Deal';
import Aux from '../../hoc/Auxilary/Aux';

class DealList extends Component {
    render () {
        return (
            <Aux>
                <Deal />
                <Deal />
                <Deal />
            </Aux>
        );
    }
}

export default DealList;