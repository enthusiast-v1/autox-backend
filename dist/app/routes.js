"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const route_1 = require("./modules/auth/route");
const router = (0, express_1.Router)();
[{ path: '/auth', route: route_1.AuthRoutes }].forEach(({ path, route }) => router.use(path, route));
exports.routes = router;
