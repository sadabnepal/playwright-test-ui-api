import { getAllCharacters, queryFilterCharacterById } from "@api/data/graphql";
import { queryGraphQl } from "@api/helper/httpCalls";
import { graphCharactersSchema } from "@api/schema/reqRes";
import { env, TEST_ENV } from "@env/manager";
import { expect, test } from "@playwright/test";

const testEnvTag = `@env:${TEST_ENV}`;

test("graphql: query all characters", { tag: ["@graphql", testEnvTag] }, async () => {

    const response = await queryGraphQl(env.GRAPHQL_URL, getAllCharacters());
    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log("body", JSON.stringify(body, null, 2));

    graphCharactersSchema.parse(body);
});


test("graphql: filter character by id", { tag: ["@graphql", testEnvTag] }, async () => {
    const response = await queryGraphQl(env.GRAPHQL_URL, queryFilterCharacterById(1));

    expect(response.status()).toEqual(200);

    const body = await response.json();
    console.log("body", JSON.stringify(body, null, 2));

    expect(body.data.character).toMatchObject({
        id: "1",
        name: "Rick Sanchez",
        status: "Alive",
        gender: "Male",
        species: "Human"
    });

});