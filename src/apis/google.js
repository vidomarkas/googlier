import axios from 'axios';

const API_KEY = 'AIzaSyCwIJA0vwogxqOzItDSikJIXB_tAP2mWUw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/customsearch',
    params: {
        key: API_KEY,
        cx: '000959800582777215336:fiqpxnfgbcq'
    }

});