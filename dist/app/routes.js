"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const route_1 = require("./modules/auth/route");
const route_2 = require("./modules/booking/route");
const route_3 = require("./modules/driver/route");
const route_4 = require("./modules/profile/route");
const route_5 = require("./modules/rent/route");
const route_6 = require("./modules/user/route");
const route_7 = require("./modules/vehicle/route");
const router = (0, express_1.Router)();
[
    { path: '/auth', route: route_1.AuthRoutes },
    { path: '/profiles', route: route_4.ProfileRoutes },
    { path: '/users', route: route_6.UserRoutes },
    { path: '/bookings', route: route_2.BookingRoutes },
    { path: '/vehicles', route: route_7.VehicleRoutes },
    { path: '/drivers', route: route_3.DriverRoutes },
    { path: '/rents', route: route_5.RentRoutes },
].forEach(({ path, route }) => router.use(path, route));
exports.routes = router;
