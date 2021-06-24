import pg, { Pool } from 'pg'

export const pool=new Pool(
    {
        user: 'szikcpxrgtvilb',
        host:'ec2-3-212-75-25.compute-1.amazonaws.com',
        password:'ee37b621e61edfcfaa6fccba8087818924fd96caaf4d002e589b70719bc804db',
        database:'d3pflou1n0s24i',
        port:5432,
        ssl:{
            rejectUnauthorized:false
        }
    }
);

