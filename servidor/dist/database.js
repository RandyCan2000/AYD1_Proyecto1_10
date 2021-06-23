"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'szikcpxrgtvilb',
    host: 'ec2-3-212-75-25.compute-1.amazonaws.com',
    password: 'ee37b621e61edfcfaa6fccba8087818924fd96caaf4d002e589b70719bc804db',
    database: 'd3pflou1n0s24i',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
//# sourceMappingURL=database.js.map