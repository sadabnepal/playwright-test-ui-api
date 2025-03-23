export interface ICreateUser {
    role: UserRoles;
    name: string;
    status: UserStatus;
    username: string;
    password: string;
}

type UserRoles = 'Admin' | 'ESS';
type UserStatus = 'Enabled' | 'Disabled';