import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const SeriesListItem = ({ series }) => (

    <li>
        {(series.show.image == null) ? series.show.image = "http://static.tvmaze.com/uploads/images/medium_portrait/116/291721.jpg" : true}
        <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>
        <img alt="Show" src={series.show.image.medium} />
        {/* <img alt="Show" src={typeof (series.show.image) !== false ? series.show.image.medium : "http://static.tvmaze.com/uploads/images/medium_portrait/116/291721.jpg"} /> */}
        {console.log(series)}
        {/* {console.log(series.show.image.medium)} */}
        {/* {console.log(typeof (series.show.image.medium))} */}
    </li >
);

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (

                    < SeriesListItem series={series} key={series.show.id} />
                ))}

            </ul>
        </div>
    )
}

export default SeriesList;