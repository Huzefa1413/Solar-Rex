// import axios from 'axios';
// import { API_URL } from '../../config';

// export const login_user = async (body) => {
//   try {
//     const data = await axios
//       .post(`${API_URL}/user/sign-in`, body)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const signUp = async (body) => {
//   try {
//     const data = await axios
//       .post(`${API_URL}/user/sign-up`, body)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const getLogin_user = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/user/get-login-user`)
//       .then((res) => {
//         console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const get_all_users = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/admin/get_all_users`)
//       .then((res) => {
//         console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const getCustProfile = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/admin/getCustProfile?id=${body}`)
//       .then((res) => {
//         console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const buy = async (body) => {
//   try {
//     const data = await axios.post(`${API_URL}/energy/buy`, body).then((res) => {
//       // console.log(res);
//       return res.data;
//     });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const get_transactions = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/tx/get_transactions`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const update_profile = async (body) => {
//   try {
//     const data = await axios
//       .post(`${API_URL}/user/update_profile`, body)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const adminCards = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/adminCards`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const userCards = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/userCards?id=${body}`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const UpdateProfilePic = async (body) => {
//   try {
//     const data = await axios
//       .post(`${API_URL}/user/uploadProfilePic`, body)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const last3months = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/last3months`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const last3monthsSoldvsProduced = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/last3monthsSoldvsProduced`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const last3monthsConsumption = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/last3monthsConsumption?id=${body}`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const lastMonthsPurchasedVsConsumed = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/lastMonthsPurchasedVsConsumed?id=${body}`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const productionPrediction = async () => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/productionPrediction`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

// export const consumptionPrediction = async (body) => {
//   try {
//     const data = await axios
//       .get(`${API_URL}/analytics/consumptionPrediction?id=${body}`)
//       .then((res) => {
//         // console.log(res);
//         return res.data;
//       });
//     return data;
//   } catch (err) {
//     console.log(err.response.data);
//     return err.response.data;
//   }
// };

import axios from 'axios';
import { API_URL } from '../../config';

const apiRequest = async (method, url, body = null) => {
  try {
    let response;
    if (method === 'GET') {
      response = await axios.get(`${API_URL}${url}`);
    } else if (method === 'POST') {
      response = await axios.post(`${API_URL}${url}`, body);
    }
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

export const login_user = async (body) => {
  return apiRequest('POST', '/user/sign-in', body);
};

export const signUp = async (body) => {
  return apiRequest('POST', '/user/sign-up', body);
};

export const getLogin_user = async () => {
  return apiRequest('GET', '/user/get-login-user');
};

export const get_all_users = async () => {
  return apiRequest('GET', '/admin/get_all_users');
};

export const getCustProfile = async (body) => {
  return apiRequest('GET', `/admin/getCustProfile?id=${body}`);
};

export const buy = async (body) => {
  return apiRequest('POST', '/energy/buy', body);
};

export const get_transactions = async () => {
  return apiRequest('GET', '/tx/get_transactions');
};

export const update_profile = async (body) => {
  return apiRequest('POST', '/user/update_profile', body);
};

export const adminCards = async () => {
  return apiRequest('GET', '/analytics/adminCards');
};

export const userCards = async (body) => {
  return apiRequest('GET', `/analytics/userCards?id=${body}`);
};

export const UpdateProfilePic = async (body) => {
  return apiRequest('POST', '/user/uploadProfilePic', body);
};

export const last3months = async () => {
  return apiRequest('GET', '/analytics/last3months');
};

export const last3monthsSoldvsProduced = async () => {
  return apiRequest('GET', '/analytics/last3monthsSoldvsProduced');
};

export const last3monthsConsumption = async (body) => {
  return apiRequest('GET', `/analytics/last3monthsConsumption?id=${body}`);
};

export const lastMonthsPurchasedVsConsumed = async (body) => {
  return apiRequest(
    'GET',
    `/analytics/lastMonthsPurchasedVsConsumed?id=${body}`
  );
};

export const productionPrediction = async () => {
  return apiRequest('GET', '/analytics/productionPrediction');
};

export const consumptionPrediction = async (body) => {
  return apiRequest('GET', `/analytics/consumptionPrediction?id=${body}`);
};
