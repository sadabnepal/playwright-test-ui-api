import { faker } from '@faker-js/faker';


export const createRandomUserData = {
    name: faker.person.fullName(),
    job: faker.person.jobType()
};