
import React from "react";
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://upayments-studycase-api.herokuapp.com'
  });

  var AUTH_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNjaW9ub2ZkZWVuc2hhaEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbmFzZWViLXNoYWgiLCJpYXQiOjE2NjQ1NTY2NzQsImV4cCI6MTY2NDk4ODY3NH0.auLCN4pAGBod9HKy6HXizdyE3ybCHYP2ZC1iaJKIm20'
  instance.defaults.headers.common['Authorization'] = "Bearer"+" "+AUTH_TOKEN

  
  export default instance