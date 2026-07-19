function inject(request) {
    const body = JSON.parse(request.body);
    const query = body.query || "";
    const variables = body.variables || {};

    const notFoundResult = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data: {
                character: null
            }
        }, null, 2)
    }

    // TODO: filter results by graphql keys passed in query
    function getAllCharacters() {

        const fs = require("fs");
        const path = require("path");

        const charactersFixtureFilePath = path.join(process.cwd(), "mocks/fixtures/characters.json");

        const fixture = JSON.parse(fs.readFileSync(charactersFixtureFilePath), "utf8");

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: {
                    characters: {
                        info: { count: fixture.length },
                        results: fixture
                    }
                }
            }, null, 2)
        };
    }

    // TODO: filter results by graphql keys passed in query
    function getCharacterById() {

        const fs = require("fs");
        const path = require("path");

        const charactersFixtureFilePath = path.join(process.cwd(), "mocks/fixtures/characters.json");

        const fixture = JSON.parse(fs.readFileSync(charactersFixtureFilePath), "utf8");

        const id = variables.id;

        if (!id) return notFoundResult;

        const result = fixture.find(c => Number(c.id) === id);

        if (!result) return notFoundResult;

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: {
                    character: result
                }
            }, null, 2)
        };

    }

    function getResponseForBadRequest() {
        const errorResponse = {
            "errors": [
                {
                    "message": "Variable \"$id\" of required type \"ID!\" was not provided.",
                    "locations": [
                        {
                            "line": 1,
                            "column": 17
                        }
                    ],
                    "extensions": {
                        "code": "INTERNAL_SERVER_ERROR"
                    }
                }
            ]
        }

        const badRequest = {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ errorResponse }, null, 2)
        }

        return badRequest;
    }

    if (query.includes("characters")) {
        return getAllCharacters();
    }

    if (query.includes("character") && variables.id) {
        return getCharacterById()
    }

    if (query.includes("character") && !variables.hasOwnProperty("id")) {
        return getResponseForBadRequest();
    }

    return {
        statusCode: 400,
        body: JSON.stringify({ errors: [{ message: "unknown operation" }] })
    };
}