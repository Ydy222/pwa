import axios from "axios";

export const fetchAqi = async (lat, lng) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_AIR_API_URL}:${lat};${lng}/?token=${import.meta.env.VITE_AIR_API_KEY}`);
        return response.data.data;
    }catch (e){
        return null;
    }
}