import { createRandomUserData } from '@api/data/restApi';
import { getRestApiRequest, postRestApiRequest } from '@api/helper/httpCalls';
import { expect, test } from '@playwright/test';

const baseUrl = 'https://reqres.in/api';

test('rest api: get user', async () => {
    const response = await getRestApiRequest(baseUrl.concat('/users/1'));
    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log(body);
});

test('rest api: create user', async () => {
    const response = await postRestApiRequest(baseUrl.concat('/users'), createRandomUserData);
    expect(response.status()).toEqual(201);

    const body = await response.json();
    console.log(body);
});