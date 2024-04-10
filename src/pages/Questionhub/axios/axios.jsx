import axios from "axios";
const API_URL = 'https://testoj.credenz.in/';
const contestId = 'c073d';

// we need to pass the baseURL as an object
const axiosNoAuthInstance = axios.create({
  baseURL: API_URL ,
});

const axiosAuthInstance = axios.create({
  baseURL: API_URL,
});

axiosAuthInstance.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('TOKEN');
      // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyMjQ2MzY2LCJpYXQiOjE3MTIyMzU1NjYsImp0aSI6ImJjYjM4NWU2OTIxYzQzYzFhYzlhYzYzYWY5NTg0NzcwIiwidXNlcl9pZCI6MX0.rdtLoT7Yu_tLv-DSKD5NpA25-XcigxMFYCYtGq1cyz8';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
)

export {axiosNoAuthInstance, axiosAuthInstance, contestId };