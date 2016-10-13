import axios from 'axios';

export function search_Channel(channelName) {
    return function(dispatch) {
        // First we need to let know everyone that we have started searching for a channel
        dispatch(search_Channel_Started());

        // Then we actually need to start the search with axios
        axios.get('https://api.twitch.tv/kraken/channels/' + channelName)
                .then(function(channelInfo) {
                    // Everything went ok, we got the channel info, now let everyone know about that
                    dispatch(search_Channel_Success(channelInfo));
                })
                .catch(function(error) {
                    // There was an error, let everyone know about that
                    dispatch(search_Channel_Error(error))
                })
    }
}

export function search_Channel_Started() {
    return {
        type: "SEARCH_CHANNEL_STARTED",
        isSearching: true
    }
}


export function search_Channel_Success(channel) {
    return {
        type: "SEARCH_CHANNEL_SUCCESS",
        isSearching: false,
        channelData: channel
    }
}


export function search_Channel_Error(error) {
    return {
        type: "SEARCH_CHANNEL_ERROR",
        isSearching: false,
        channelError: error
    }
}