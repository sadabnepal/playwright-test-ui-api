import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '.env') });

export default class ENV {
    public static readonly USERNAME = process.env.USERNAME as string;
    public static readonly PASSWORD = process.env.PASSWORD as string;
}