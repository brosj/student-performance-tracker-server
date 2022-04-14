"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const users_1 = __importDefault(require("../models/users"));
function login(req, res) {
    users_1.default.findOne({ email: req.body.email })
        .then((user) => {
        if (!user) {
            res.json({ error: 'User does not exist.' });
        }
        else {
            if (req.body.password !== user.password) {
                res.json({ error: 'Wrong password.' });
            }
            else {
                res.json({ msg: 'Login successful.' });
            }
        }
    })
        .catch((err) => {
        res.json({ error: err });
    });
}
exports.login = login;
//# sourceMappingURL=login.js.map