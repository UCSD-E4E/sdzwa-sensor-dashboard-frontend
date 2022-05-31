import { constructEndpointUrl, sendRequest } from './Api';

const SENSOR_ENDPOINT = '/api/sensor/id/';
const ADD_SENSOR_ENDPOINT = '/api/sensor/';
const EDIT_SENSOR_ENDPOINT = '/api/sensor/id/';
const DELETE_SENSOR_ENDPOINT = '/api/sensor/name/';

export type Sensor = {
    id: string;
    authToken: string;
}

export type EditSensor = {
    name: string;
    description: string;
    type: string;
    source: string;
    format: string;
    authToken: string;
}

export const getSensor = (sensor: Sensor) => {
    const url = constructEndpointUrl(SENSOR_ENDPOINT, `?sensorId=${sensor.id}`);
    const method = 'GET';
    const authToken = sensor.authToken;

    return sendRequest({ url, method, body: {}, headers: {}, authToken});
}

export const deleteSensor = (sensor: Sensor) => {
    const url = constructEndpointUrl(DELETE_SENSOR_ENDPOINT, `?sensorId=${sensor.id}`);
    const method = 'POST';
    const authToken = sensor.authToken;

    return sendRequest({ url, method, body: {}, headers: {}, authToken});
}

export const addSensor = (newSensor: EditSensor) => {
    const body = {
        Name: newSensor.name,
        Description: newSensor.description,
        Type: newSensor.type,
        Source: newSensor.source,
        Format: newSensor.format
    };
    const url = constructEndpointUrl(ADD_SENSOR_ENDPOINT, '');
    const method = 'POST';
    const authToken = newSensor.authToken;

    return sendRequest({ url, method, body, headers: {}, authToken});
}

export const editSensor = (editingSensor: EditSensor) => {
    const body = {
        Name: editingSensor.name,
        Description: editingSensor.description,
        Type: editingSensor.type,
        Source: editingSensor.source,
        Format: editingSensor.format
    };
    const url = constructEndpointUrl(EDIT_SENSOR_ENDPOINT, '');
    const method = 'POST';
    const authToken = editingSensor.authToken;

    return sendRequest({ url, method, body, headers: {}, authToken});
}