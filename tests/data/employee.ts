import { faker } from "@faker-js/faker";
import { ICreateEmployee } from "../interfaces/employee";

export const createEmployeeData = (status: 'Enabled' | 'Disabled'): ICreateEmployee => {
    return {
        employeeDetails: {
            firstName: faker.person.firstName(),
            middleName: faker.person.middleName(),
            lastName: faker.person.lastName(),
            employeeId: faker.number.int({ min: 500, max: 5000 }).toString()
        },
        loginDetails: {
            username: faker.internet.username(),
            password: faker.internet.password(),
            status: status
        }
    }
}