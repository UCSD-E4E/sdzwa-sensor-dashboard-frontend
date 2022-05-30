import { constructEndpointUrl, sendRequest } from './Api';

const REGISTRATION_ENDPOINT = '/api/user/register';
const AUTHENTICATION_ENDPOINT = '/api/user/login';

export type NewUser = {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
}

export type AuthUser = {
    email: string;
    passwordHash: string;
    passwordSalt: string;
}

export const register = (newUser: NewUser) => {
    const body = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.passwordHash,
        salt: newUser.passwordSalt
    };
    const url = constructEndpointUrl(REGISTRATION_ENDPOINT, '');
    const method = 'POST';

    return sendRequest({ url, method, body, headers: {}, authToken: ''});
}

export const login = (authUser: AuthUser) => {
    const body = {
        email: authUser.email,
        password: authUser.passwordHash,
        salt: authUser.passwordSalt
    };
    const url = constructEndpointUrl(AUTHENTICATION_ENDPOINT, '');
    const method = 'POST';

    return sendRequest({ url, method, body, headers: {}, authToken: ''});
}