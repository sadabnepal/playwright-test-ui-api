export const queryFilterCharacterById = (id: number) => ({
    query: `query Character($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            gender
        }
    }`,
    variables: { id }
});

export const getAllCharacters = () => ({
    query: `query Query {
        characters {
            info {
                count
            }
            results {
                id
                name
                status
                gender
                species
            }
        }
    }`
});