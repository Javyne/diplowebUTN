import axios from 'axios';

const reparaciones = async (id) => {
    return await axios.get(`http://localhost:4000/api/${id}`);
}


export { reparaciones }