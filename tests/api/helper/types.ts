export type RestBaseUrl = 'https://reqres.in/api';
type ResourceName = 'users';
type Users = number;


export type GetEndpoints = `/${ResourceName}/${Users}`
    | `/${ResourceName}/?page=${number}`
    | `/${ResourceName}/unknown`
    | `/${ResourceName}/delay/${number}`;

export type PostEndpoints = `/${ResourceName}`
    | `/${ResourceName}/${number}`
    | `/${ResourceName}/register`
    | `/${ResourceName}/login`;