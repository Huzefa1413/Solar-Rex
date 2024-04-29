import axios from 'axios';
import { API_URL } from '../../config';

export const login_user = async (body) => {
  try {
    const data = await axios
      .post(`${API_URL}/user/sign-in`, body)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const signUp = async (body) => {
  try {
    const data = await axios
      .post(`${API_URL}/user/sign-up`, body)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const getLogin_user = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/user/get-login-user`)
      .then((res) => {
        console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const get_all_users = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/admin/get_all_users`)
      .then((res) => {
        console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const getCustProfile = async (body) => {
  try {
    const data = await axios
      .get(`${API_URL}/admin/getCustProfile?id=${body}`)
      .then((res) => {
        console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const buy = async (body) => {
  try {
    const data = await axios.post(`${API_URL}/energy/buy`, body).then((res) => {
      // console.log(res);
      return res.data;
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const get_transactions = async (body) => {
  try {
    const data = await axios
      .get(`${API_URL}/tx/get_transactions`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const update_profile = async (body) => {
  try {
    const data = await axios
      .post(`${API_URL}/user/update_profile`, body)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const adminCards = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/adminCards`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const userCards = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/userCards`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const UpdateProfilePic = async (body) => {
  try {
    const data = await axios
      .post(`${API_URL}/user/uploadProfilePic`, body)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const last3months = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/last3months`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const last3monthsSoldvsProduced = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/last3monthsSoldvsProduced`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const last3monthsConsumption = async (body) => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/last3monthsConsumption?id=${body}`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const lastMonthsPurchasedVsConsumed = async (body) => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/lastMonthsPurchasedVsConsumed?id=${body}`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const productionPrediction = async () => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/productionPrediction`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const consumptionPrediction = async (body) => {
  try {
    const data = await axios
      .get(`${API_URL}/analytics/consumptionPrediction?id=${body}`)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};
