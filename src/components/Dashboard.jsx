import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loading';
import { getFile } from '../utils/fetchData';
import _ from 'lodash';
import { ChordDiagram, SankeyDiagram } from './';
import dataReference from '../utils/dataReference';

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

        var names = [], chordData = [];


        getFile('data/sample_data.csv')
            .then((data) => {
                let dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));
                names.push(dataMatrix.slice(0, 1)[0]);
                chordData.push(dataMatrix.slice(1).map((d) => d.slice(1).map(t => +t)));
                return getFile('data/immigration_data.csv')
            })
            .then((data) => {
                let dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));
                names.push(dataMatrix.slice(0, 1)[0]);
                chordData.push(dataMatrix.slice(1).map((d) => d.slice(1).map(t => +t)));
                return getFile('data/phone_data.csv');
            })
            .then((data) => {
                let dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));
                names.push(dataMatrix.slice(0, 1)[0]);
                chordData.push(dataMatrix.slice(1).map((d) => d.slice(1).map(t => +t)));
                return getFile('data/euro_crisis.csv');
            })
            .then((data) => {
                let dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));
                names.push(dataMatrix.slice(0, 1)[0]);
                chordData.push(dataMatrix.slice(1).map((d) => d.slice(1).map(t => +t)));

                return getFile('data/space_investment.csv')
            })
            .then((data) => {
                let dataMatrix = data.trim().split('\n').map((d) => d.trim().split(' '));
                names.push(dataMatrix.slice(0, 1)[0]);
                chordData.push(dataMatrix.slice(1).map((d) => d.slice(1).map(t => +t)));

                this.setState({ names, chordData });
            })
            .catch(() => {
                alert("Sorry there was an error in fetching and parsing the datasets");
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

                    <div className='dashboard-inner-root text-center container'>
                        {_.map(names, (nameList, nameIndex) =>
                            <div key={nameIndex} className='row m-b-lg'>
                                <h3>{dataReference[nameIndex].name}</h3>
                                {nameList.length > 0 && <ChordDiagram id={"chord" + "-" + nameIndex} data={chordData[nameIndex]} names={nameList} />}
                                {nameList.length > 0 && <SankeyDiagram id={"sankey" + "-" + nameIndex} data={chordData[nameIndex]} names={nameList} />}
                            </div>)}
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



