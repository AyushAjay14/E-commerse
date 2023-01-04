import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGExMGQzOGE2OWM0YjViY2MyMWQwYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk5OTI4NzIsImV4cCI6MTY3MDI1MjA3Mn0.rx0SwM2GRzjuwADvCo2qstD_3Z5QBZmIq7LM_rSgqyc"

export const publicRequest = axios.create({
    baseURL : BASE_URL , 
});