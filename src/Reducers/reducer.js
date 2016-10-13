export function reducer (state = { isSearching: false, channelData: {}, channelError: '' }, action) {
    switch(action.type) {
        case 'SEARCH_CHANNEL_STARTED':
            return (
                Object.assign(
                    {}, 
                    state, 
                    { 
                        isSearching: action.isSearching
                    }
                )
            );

        case 'SEARCH_CHANNEL_SUCCESS':
            return (   
                Object.assign(
                    {},
                    state, 
                    { 
                        isSearching: action.isSearching,
                        channelData: action.channelData.data,
                        channelError: ''
                    }
                )
            );      

        case 'SEARCH_CHANNEL_ERROR':
            return (
                Object.assign(
                    {}, 
                    state, 
                    { 
                        isSearching: action.isSearching,
                        channelError: action.channelError.message 
                    }
                )
            );

        default:
            return state;
    }
}