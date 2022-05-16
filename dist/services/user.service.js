"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const axios_1 = __importDefault(require("axios"));
exports.userService = {
    getAll: () => axios_1.default.get('https://jsonplaceholder.typicode.com/users')
};
//# sourceMappingURL=user.service.js.map