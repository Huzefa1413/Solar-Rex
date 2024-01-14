import axios from "axios";
import { API_URL } from "../../config";


export const login_user = async (body) => {
    try {
        const data = await axios.post(`${API_URL}/user/sign-in`, body)
            .then(res => {
                // console.log(res);
                return (res.data);
            })
        return data;
    }
    catch (err) {
        console.log(err.response.data);
        return err.response.data;
    }
}



export const signUp = async (body) => {
    try {
        const data = await axios.post(`${API_URL}/user/sign-up`, body)
            .then(res => {
                // console.log(res);
                return (res.data);
            })
        return data;
    }
    catch (err) {
        console.log(err.response.data);
        return err.response.data;
    }
}

export const getLogin_user = async () => {
    try {
        const data = await axios.get(`${API_URL}/user/get-login-user`)
            .then(res => {
                console.log(res);
                return (res.data);
            })
        return data;
    }
    catch (err) {
        console.log(err.response.data);
        return err.response.data;
    }
}
