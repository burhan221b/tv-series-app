import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const SeriesListItem = ({ series }) => (

    <li>
        {/* {(series.show.image == null) ? series.show.image = "http://static.tvmaze.com/uploads/images/medium_portrait/116/291721.jpg" : null} */}

        {/* <Link className='li-list' to={`/series/${series.show.id}`}>{series.show.name}</Link> */}
        {/* {(series.show.image == null) ? series.show.image = "" : null}
        <img className="series-list-image" alt="Show" src={(series.show.image.medium === 'undefined') ? series.show.image : series.show.image.medium} /> */}

        {(series.show.image == null) ? null : <Link className='li-list' to={`/series/${series.show.id}`}>{series.show.name}</Link>}
        {(series.show.image == null) ? null : [<img className="series-list-image" alt="Show" src={(series.show.image == null) ? series.show.image = '' : [(series.show.image.medium === 'undefined') ? series.show.image : series.show.image.medium]} />]}


        {/* {console.log(series)} */}
        {/* {console.log(series.show.image)} */}
        {/* <img alt="Show" src={typeof (series.show.image) !== false ? series.show.image.medium : "http://static.tvmaze.com/uploads/images/medium_portrait/116/291721.jpg"} /> */}

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