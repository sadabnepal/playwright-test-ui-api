export const queryRickAndMortyDetails = `query Query {
                    characters(page: 2, filter: {name: "Morty"}) {
                        info {
                        count
                        }
                        results {
                        name
                        }
                    }
                }`;