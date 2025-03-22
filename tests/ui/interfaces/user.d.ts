export interface ICreateUser {
    role: 'Admin' | 'ESS';
    name: string;
    status: 'Enabled' | 'Disabled';
    username: string;
    password: string;
}