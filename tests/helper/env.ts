import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env') });

export default class ENV {
    public static readonly USERNAME = process.env.USERNAME as string;
    public static readonly PASSWORD = process.env.PASSWORD as string;
}