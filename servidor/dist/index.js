"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
//middlewares
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});
module.exports = app;
//# sourceMappingURL=index.js.map