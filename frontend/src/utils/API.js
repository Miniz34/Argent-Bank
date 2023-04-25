import axios from "axios"

const api = {
  host: "http://localhost:3001/",
  url: "api/v1/",
}

const service = {
  user: {
    post: (email, password) => {
      return axios.post(api.host + api.url + "user/login", {
        email: email,
        password: password
      });
    },

    get: (token) => {
      return axios({
        url: api.host + api.url + "user/profile",
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    put: (firstName, lastName, token) => {
      return axios({
        url: api.host + api.url + "user/profile",
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        }
      })

    }

  },

  transactions: {
    post: () => {

    },

  }


}

export default service;