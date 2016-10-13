import React from 'react';
import Loader from './Loader';

/*
    SearchResults is also a presentational component, that gets props from its parent, and just displays the results.
*/

const SearchResults = ({
    results
}) => {

    let userInfo = results.channelData.hasOwnProperty('display_name')
                        ?   <div className="panel panel-success col-sm-6 col-sm-offset-3">
                                <div className="panel-heading">{ results.channelData.display_name }</div>
                                <div className="panel-body">
                                    <h5>Status: { results.channelData.status || 'No status.' }</h5>
                                    <h5>Game: { results.channelData.game || 'This user does not play any games.' }</h5>
                                    <h5>Views: { results.channelData.views }</h5>
                                    <h5>Followers: { results.channelData.followers }</h5>
                                    <h5>
                                        <a href={ results.channelData.url } target="_blank">
                                            <button className="btn btn-default">Watch now</button>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        : '';
    return (

        <div className="search-results-div">
            <h3>Search results:</h3>
            {
                results.isSearching ?
                <Loader />
                : <p></p>
            }
            {
                results.channelError ?
                <div className="alert alert-danger col-sm-6 col-sm-offset-3">
                    <strong>Error!</strong> That channel does not exist or is not online.
                </div>
                : <p></p>
            }
            { userInfo }
        </div>
    );
}

export default SearchResults;
