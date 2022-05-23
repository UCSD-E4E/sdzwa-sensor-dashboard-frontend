import { constructEndpointUrl, sendRequest } from './Api';

const REGISTRATION_ENDPOINT = '/register';
const AUTHENTICATION_ENDPOINT = '/login';

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
        FirstName: newUser.firstName,
        LastName: newUser.lastName,
        Email: newUser.email,
        PasswordHash: newUser.passwordHash,
        PasswordSalt: newUser.passwordSalt
    };
    const url = constructEndpointUrl(REGISTRATION_ENDPOINT, '');
    const method = 'POST';

    return sendRequest({ url, method, body, headers: {}, authToken: ''});
}

export const login = (authUser: AuthUser) => {
    const body = {
        Email: authUser.email,
        PasswordHash: authUser.passwordHash,
        PasswordSalt: authUser.passwordSalt
    };
    const url = constructEndpointUrl(AUTHENTICATION_ENDPOINT, '');
    const method = 'POST';

    return sendRequest({ url, method, body, headers: {}, authToken: ''});
}