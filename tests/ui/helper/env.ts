import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '.env') });

export const ENV = {
    USERNAME: process.env.USERNAME as string,
    PASSWORD: process.env.PASSWORD as string
};