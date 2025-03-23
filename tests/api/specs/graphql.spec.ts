import { queryGraphQl } from '@api/helper/httpCalls';
import { expect, test } from '@playwright/test';
import { queryRickAndMortyDetails } from 'api/data/graphql';

test('graphql: query operation', async () => {

    const response = await queryGraphQl('https://rickandmortyapi.com/graphql', queryRickAndMortyDetails);
    expect(response.status()).toEqual(200);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 4));
});