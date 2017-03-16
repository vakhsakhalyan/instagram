var express = require('express');
var config = require('../config/config');
var _ = require('lodash-node');

var router = express.Router();
var instagram_router = express.Router();

var insta_apis = [{
    route: '/users',
    url: './instagram/users.js'
} ];

module.exports = function(app) {
    app.use("", router);

    router.use(config.restApis.instagram.rest_url(), instagram_router);
    use(instagram_router, insta_apis);
};

function use(root_router, apis) {
    _.each(apis, function(api) {
        var router = require(api.url);
        root_router.use(api.route, router);
    });
}