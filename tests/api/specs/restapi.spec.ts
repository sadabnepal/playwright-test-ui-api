import { createRandomUserData } from '@api/data/restApi';
import { getRestApiRequest, postRestApiRequest } from '@api/helper/httpCalls';
import { env } from '@env/manager';
import { expect, test } from '@playwright/test';

test('rest api: get user', async () => {
    const response = await getRestApiRequest(env.REST_URL, '/users/1');

    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log(body);
    expect(body.data).toBeDefined();
    expect(body.data.id).toEqual(1);
    expect(body.data.first_name).toEqual('George');
    expect(body.data.last_name).toEqual('Bluth');
});

test('rest api: create user', async () => {
    const payload = createRandomUserData;

    const response = await postRestApiRequest(env.REST_URL, '/users', payload);
    expect(response.status()).toEqual(201);

    const body = await response.json();

    console.log(body);

    expect(body.name).toEqual(payload.name);
    expect(body.job).toEqual(payload.job);
    expect(body.id).toBeDefined();
    expect(body.createdAt).toBeDefined();
});