import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loading';
import { getFile } from '../utils/fetchData';
import _ from 'lodash';
import { ChordDiagram,SankeyDiagram } from './';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: [],
            chordData: [],
            loader: false
        }
    }

    componentDidMount() {
        // Turn loader onON
        this.setState({ 'loader': true });

        getFile('data/data.csv')
            .then((data) => {
                var dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));

                var names = dataMatrix.slice(0, 1)[0],
                    chordData = dataMatrix.slice(1).map((d)=> d.slice(1).map(t=>+t));

                this.setState({ names, chordData })
            })
            .catch(() => {
                alert("Sorry there was an error in fetching and parsing the dataset");
                console.log('error');
            })
            .finally(() => { this.setState({ 'loader': false }) });

    }

    render() {

        const { loader = false, names, chordData } = this.state;
        // set the dimensions of the graph
        return (
            <div className='dashboard-root container-fluid'>
                {loader ?
                    <Loader className='loading-spinner' type='spin' height='100px' width='100px' color='#d6e5ff' delay={- 1} /> :
                    <div className='dashboard-inner-root text-center'>
                        {names.length > 0 && <ChordDiagram data={chordData} names={names} />}
                        {names.length > 0 && <SankeyDiagram data={chordData} names={names} />}
                    </div>}

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            // fill in with actions here 
        }, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        // fill in with props that you need to read from state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



