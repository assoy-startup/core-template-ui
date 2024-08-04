import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import userStore from "./stores/userStore";
import constants from "./constants";
import { data } from "jquery";
const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = constants.API_ROOT;
const responseBody = (res) => res.body;
const responseFull = (res) => {
  return res;
};

//const encode = encodeURIComponent;
const handleErrors = (err, res) => {
  if (
    (err && err.response && err.response.status === 401) ||
    (err && err.response && err.response.status === 403)
  ) {
    userStore.goToLogin();
  }
  return err;
};

const handleUserErrors = (err, res) => {
  if (err && err.response && err.response.status === 401) {
    userStore.goToLogin();
  } else if (err && err.response && err.response.status === 400) {
    return res;
  }
  return err;
};

const handleLoginError = (err, res) => {
  return err;
};

const tokenPlugin = (req) => {
  if (userStore.token) {
    req.set("Authorization", `Bearer ${userStore.token}`);
  }
};

const requests = {
  del: (url, body) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .send(body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url, body) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  getBlob: (url) => {
    console.log(url);
    return superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .responseType("blob")
      .end(handleErrors)
      .then(responseBody);
  },
  getBlob1: (url) => {
    console.log(url);
    return superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .responseType("blob")
      .end(handleErrors)
      .then(responseFull);
  },
  getServerDetails: (url) =>
    superagent
      .get(`${constants.API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  getFull: (url) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseFull),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  patch: (url, body) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  postBlob: (url, body) => {
    console.log(url);
    return superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .responseType("blob")
      .end(handleErrors)
      .then(responseFull);
  },
  updateTeam: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleUserErrors)
      .then(responseBody),
  postLogin: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleUserErrors)
      .then(responseBody),


  uploadFiles: (url, files, configId, temp) => {
    var req = superagent.post(`${API_ROOT}${url}`);

    req
      .use(tokenPlugin)
      .accept("application/json")
      .field("configId", configId)
      .on("progress", function (e) {});

    files.forEach((file) => {
      req.attach("files", file);
    });
    return req.end(handleErrors).then(responseBody);
  },


};

const Auth = {
  login: (data) =>
    requests.post(`/auth/login`,data),
};


const User={
// User related All API Address And Methods Will Define Here
};

const home={
  // home related All API Address And Methods Will Define Here
}

const about={
  // about related All API Address And Methods Will Define Here
}

const contact={
  // contact related All API Address And Methods Will Define Here
}

const services={
  // services related All API Address And Methods Will Define Here
}

const projects={
  // projects related All API Address And Methods Will Define Here
}

export default {
  Auth,
  User,
  home,
  about,
  contact,
  services,
  projects

};
