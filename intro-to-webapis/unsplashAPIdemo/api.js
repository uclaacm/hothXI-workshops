import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aYYxhLsRQYQc-zl0zIPnPN4dYLF1C3_bQ3I7tsH3z4M',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
} 

export default searchImages;