
import { RestBaseUrl } from '@api/helper/types';
import { config } from 'dotenv';
import { join } from 'path';

const ENV = process.env.ENV || 'dev';

config({ path: join(process.cwd(), 'tests', 'env', `${ENV}.env`) });

export const env = {
    APP_URL: process.env.APP_URL as string,
    REST_URL: process.env.REST_URL as RestBaseUrl,
    GRAPHQL_URL: process.env.GRAPHQL_URL as string
};