import axios from 'axios';

const API = 'https://localhost:7171/api/';

export const logOut = () => {
  localStorage.removeItem('token');
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API}auth/login`, {
      email: email,
      password: password,
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const checkToken = async (token) => {
  try {
    const response = await axios.get(`${API}auth/current-user-info`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
