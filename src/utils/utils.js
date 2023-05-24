const api = axios.create({
    method: 'GET',
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip',
    },
  });