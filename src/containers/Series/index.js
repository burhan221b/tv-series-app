import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader/index.js';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    // Immediately invoked after component renders
    componentDidMount() {
    }

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => { return response.json() })
            .then(json => this.setState({ series: json, isFetching: false }));
        console.log(e);
        console.log(e.target.value);
    }
    render() {
        // Noteice this code below. it is assign the state properties to it's corrisponditing value
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message={"Here you can find all your loved series"} />
                The length of series array - {this.state.series.length}
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>
                {/* Checks to see if value has been put */}
                {!isFetching && series.length === 0 && seriesName.trim() === "" && <p>Please Enter Series Name into the Input</p>}
                {/* Checks to see if Any matches Found */}
                {!isFetching && series.length === 0 && seriesName.trim() !== "" && <p>No TV Series have been found with this name</p>}
                {/* {isFetching && <p>Loading...</p>} */}
                {isFetching && <Loader />}
                {!isFetching && <SeriesList list={this.state.series} />}

            </div>
        );
    }
}

export default Series