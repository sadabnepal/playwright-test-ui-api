import { request } from '@playwright/test';

export async function getRestApiRequest(baseUrl: string) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.get(baseUrl);
    return response;
}

export async function postRestApiRequest(baseUrl: string, payload: Record<string, string>) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl, { data: payload });
    return response;
}


export async function queryGraphQl(baseUrl: string, query: string | object) {
    const apiContext = await request.newContext({ timeout: 30000 });
    const response = apiContext.post(baseUrl, {
        data: { query: query }
    });
    return response;
}