import { constructEndpointUrl, sendRequest } from './Api';

const SENSOR_ENDPOINT = '/api/sensor/id/';
const ADD_SENSOR_ENDPOINT = '/api/sensor/';
const EDIT_SENSOR_ENDPOINT = '/api/sensor/id/';
const DELETE_SENSOR_ENDPOINT = '/api/sensor/id/';

export type Sensor = {
    id: string;
    authToken: string;
}

export type EditSensor = {
    name: string;
    description: string;
    type: number;
    source: number;
    url: string;
    authToken: string;
}

export const getAllSensors = (authToken: string) => {
    const url = constructEndpointUrl(ADD_SENSOR_ENDPOINT, '');
    const method = 'GET';
    
    return sendRequest({ url, method, body: {}, headers: {}, authToken});
}

export const getSensor = (sensor: Sensor) => {
    const url = constructEndpointUrl(SENSOR_ENDPOINT, sensor.id);
    const method = 'GET';
    const authToken = sensor.authToken;

    return sendRequest({ url, method, body: {}, headers: {}, authToken});
}

export const deleteSensor = (sensor: Sensor) => {
    const url = constructEndpointUrl(DELETE_SENSOR_ENDPOINT, sensor.id);
    const method = 'DELETE';
    const authToken = sensor.authToken;

    return sendRequest({ url, method, body: {}, headers: {}, authToken});
}

export const addSensor = (newSensor: EditSensor) => {
    const body = {
        name: newSensor.name,
        description: newSensor.description,
        type: newSensor.type,
        source: newSensor.source,
        url: newSensor.url
    };
    const url = constructEndpointUrl(ADD_SENSOR_ENDPOINT, '');
    const method = 'POST';
    const authToken = newSensor.authToken;

    return sendRequest({ url, method, body, headers: {}, authToken});
}

export const editSensor = (editingSensor: EditSensor, id: string) => {
    const body = {
        name: editingSensor.name,
        description: editingSensor.description,
        type: editingSensor.type,
        source: editingSensor.source,
        url: editingSensor.url
    };
    const url = constructEndpointUrl(EDIT_SENSOR_ENDPOINT, id);
    const method = 'PUT';
    const authToken = editingSensor.authToken;

    return sendRequest({ url, method, body, headers: {}, authToken});
}