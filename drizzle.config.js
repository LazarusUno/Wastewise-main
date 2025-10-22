

import 'dotenv/config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out:'./drizzle',

    dbCredentials: {
        url: process.env.DATABASE_URL,
        ConnectionString: process.env.DATABASE_URL,

    }
}