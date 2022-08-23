import axios from 'axios';

const reparaciones = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/${id}`);
}


export { reparaciones }