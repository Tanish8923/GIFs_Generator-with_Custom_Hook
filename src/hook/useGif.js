import { useState , useEffect } from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif , setGif] = useState('');
    const [Loading , setLoading] = useState(false);

    async function fetchData(){

        setLoading(true);
        
        let {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return{gif , Loading , fetchData}
}

export default useGif
