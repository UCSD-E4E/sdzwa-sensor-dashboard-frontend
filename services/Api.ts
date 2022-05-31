export const PROD_ENV = '';
export const DEV_ENV = 'http://localhost:5000'; //replace with your localhost port

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: '*/*',
};

export const constructEndpointUrl = (url: string, endpoint: string) => {
  return DEV_ENV + url + endpoint;
};

type RequestObject = {
  url: string;
  headers: object;
  method: string;
  body: object;
  authToken: string;
};

/**
 * Generic method to send an API request with the required parameters.
 * @param {*} requestObject
 *
 */
 export const sendRequest = (requestObject: RequestObject) => {
    console.log('Request Object', requestObject);
    let authHeaders = {};
    if (requestObject.authToken !== undefined && requestObject.authToken !== null && requestObject.authToken !== '') {
      authHeaders.Authorization = `Bearer ${requestObject.authToken}`;
    }
    let params = {};
    if (requestObject.method !== 'GET') {
      params.body = JSON.stringify(requestObject.body);
    }
    params.method = requestObject.method;
    params.headers = {
      ...requestObject.headers,
      ...authHeaders,
      ...DEFAULT_HEADERS,
    };
    console.log(params.headers)
    return fetch(requestObject.url, params).then(response => response.json());
  };
  