// import axios from 'axios';

const setRefreshExpiration = () => {
  const expDate = new Date().getTime() + 900000;
  localStorage.setItem('refreshExp', expDate.toString())
};

export const compareTokenExpDate = () => {
  const currentDate = new Date().getTime();
  const expDate = localStorage.getItem('refreshExp');
  if (currentDate && expDate) {
    return (currentDate > expDate)
  }
  return false
};

export const setToken = (token) => {
  localStorage.setItem('user', token);
  setRefreshExpiration();
};

export const getToken = () => {
  return localStorage.getItem('user');
};

export const signInAction = (values, history, resolve, reject) => {
  return () => {
  //   axios({
  //     method: 'post',
  //     url: `${UrlAPI.getUrl()}/api/auth`,
  //     data: values
  //   })
  //     .then(res => {
  //       setToken(res.data.token);
  //       history.push(UrlAPI.getUrl('initialPage'));
  //       resolve();
  //     })
  //     .catch(err => {
  //       reject(err);
  //     })
    setToken('StaticTokenTest');
    history.push('/home');
    resolve();
  }
};

export const isAuthenticated = () => {
  return getToken();
};

// export const signOutAction = () => {
//   return () => {
//     localStorage.clear();
//     window.location = '/';
//   }
// };

export const refreshToken = () => {
  return new Promise((resolve, reject) => {
    // axios.get(`${UrlAPI.getUrl()}/api/auth/refresh`)
    //   .then(res => {
    //     console.log(res.data);
    //     setToken(res.data.token);
    //     resolve();
    //   })
    //   .catch(err => reject(err))
    resolve()
  })
};
