export const initialState = {
    user: null,
    playlits: {},
    featured: {},
    tracks: {},
    playing: false,
    item: null,
    token: null
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_TOKEN: 'SET_TOKEN',
    SET_PLAYLISTS: 'SET_PLAYLISTS',
    SET_FEATURED: 'SET_FEATURED',
    SET_TRACKS: 'SET_TRACKS'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_FEATURED':
            return {
                ...state,
                featured: action.featured
            }
        case 'SET_TRACKS':
            return {
                ...state,
                tracks: action.tracks
            }
        default:
            return state;
    }
}

export default reducer;

