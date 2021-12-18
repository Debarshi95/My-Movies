const token = process.env.REACT_APP_API_TOKEN;
const generateApiClient = (baseURL) => {
  const config = {};
  const baseUrl = baseURL;
  config.get = async function get(path) {
    const url = `${baseUrl}${path}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      method: 'GET',
    });
  };

  return config;
};

export default generateApiClient;
