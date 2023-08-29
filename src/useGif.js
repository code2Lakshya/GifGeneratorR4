import axios from 'axios';
import { useState, useEffect } from 'react';

function useGif(tag) {
    const [gif, setGif] = useState('');
    const [loader, setLoader] = useState(false);
    async function findd(search=null) {
        setLoader(true);
        const url = tag ? 'https://api.giphy.com/v1/gifs/random?api_key=Za6GkGEHO2kbIUI0qxFdLAQ0jxx62Llu':
        `https://api.giphy.com/v1/gifs/random?api_key=Za6GkGEHO2kbIUI0qxFdLAQ0jxx62Llu&tag=${search}`;
        const { data } = await axios.get(url);
        setGif(data.data.images.downsized_large.url);
        setLoader(false);
    }
    useEffect(() => {
        findd('car');
    }, []);
    return { gif, loader, findd };
}

export default useGif;