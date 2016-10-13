import React from 'react';

/* 
    SearcChannel only receives one parameter as a prop, and that is the onClickSearch method, that dispatches an action, but the beauty is that this component
    doesn't have to know that, it just knows that it has to call a function once a button is clicked, and pass a value from the input to that function.
*/

const SearcChannel = ({
    onClickSearch
}) => {
    return (
        <div className="col-sm-12">
            <div className="col-sm-11">
                <input type="text" placeholder="Search channel.." className="form-control" id="myInput" />
            </div>

            <div className="col-sm-1">
                <button className="btn btn-success" onClick={ onClickSearch }>Search</button>
            </div>
        </div>
    );
}

// We need to make sure onClickSearch is always a function
SearcChannel.propTypes = {
    onClickSearch: React.PropTypes.func.isRequired
}

export default SearcChannel;