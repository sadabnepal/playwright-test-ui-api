import { request } from '@playwright/test';
import { GetEndpoints, PostEndpoints, RestBaseUrl } from './types';

const reqResApiKey = {
    'x-api-key': 'reqres-free-v1'
};

export async function getRestApiRequest(baseUrl: RestBaseUrl, endpoint: GetEndpoints) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.get(baseUrl.concat(endpoint), {
        headers: reqResApiKey
    });
    return response;
}

export async function postRestApiRequest(baseUrl: RestBaseUrl, endpoint: PostEndpoints, payload: Record<string, string>) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl.concat(endpoint), {
        data: payload,
        headers: reqResApiKey
    });
    return response;
}


export async function queryGraphQl(baseUrl: string, query: string | object) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl, {
        data: { query: query }
    });
    return response;
}