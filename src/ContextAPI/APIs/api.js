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

export const energyMeter = async (body) => {
  return apiRequest('GET', `/analytics/energyMeter?id=${body}`);
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

export const forget_password = async (body) => {
  return apiRequest('POST', `/user/forget_password`, body);
};

export const reset_password = async (body, token) => {
  return apiRequest('POST', `/user/reset_password/${token}`, body);
};
