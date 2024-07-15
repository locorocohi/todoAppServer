"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 5000;
var app = (0, express_1.default)();
app.get('/', function (request, response) {
    response.status(200).json('Server works');
});
app.listen(PORT, function () { return console.log('Server started on port :' + PORT); });
