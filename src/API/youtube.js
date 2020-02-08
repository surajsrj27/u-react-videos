import axios from 'axios';

const KEY = 'AIzaSyBPDXjREwFQG4Nk_tKm-_NDDk2w8-RHdQE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

