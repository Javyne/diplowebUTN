import axios from 'axios';

const sendMail = async (formData) => {
    return await axios.post('http://localhost:4000/api/mail', formData);
}


export { sendMail }