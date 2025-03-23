import { faker } from '@faker-js/faker';
import { ICreateUser } from '@ui/interface/user';

export const userData: ICreateUser = {
    role: 'ESS',
    name: 'Jobin Mathew Sam',
    status: 'Enabled',
    username: faker.internet.username(),
    password: faker.internet.password()
};