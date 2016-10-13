export function reducer (state = { isSearching: false, channelData: {}, channelError: '' }, action) {
    switch(action.type) {
        case 'SEARCH_CHANNEL_STARTED':
            state = Object.assign(
                {}, 
                state.isSearching, 
                { 
                    isSearching: true,
                    channelData: {},
                    channelError: ""
                }
            );
            return state;
        case 'SEARCH_CHANNEL_SUCCESS':
            state = Object.assign(
                {},
                state.isSearching, 
                { 
                    isSearching: false,
                    channelData: action.channelData.data,
                    channelError: "" 
                }
            );
            return state;
        case 'SEARCH_CHANNEL_ERROR':
            state = Object.assign(
                {}, 
                state, 
                { 
                    isSearching: false,
                    channelData: {},
                    channelError: action.channelError.message 
                }
            );
            return state;
        default:
            return state;
    }
}