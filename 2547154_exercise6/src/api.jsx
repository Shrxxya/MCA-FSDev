import axios from "axios";

const SearchImages = async () => {
    try {
        const response = await axios.get('https://dogapi.dog/api/v2/facts');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default SearchImages;
