var defer = require("node-promise").defer;
var request = require('request');
var config = require("../config/config");

var DEFAULT_USER_COUNT = 20;

var actions = {
    get: function (count) {
        return config.instagramApi.getURL() + "/users/691623/media/recent"
            + "?access_token=" + config.instagramApi.access_token + "&count=" + count;
    }
};

function User() {
    this.getUsers = function(params) {
        var deferred = defer();
        var count = (params && params.count) || DEFAULT_USER_COUNT;

        request({
                url: actions.get(count),
                method: "GET",
                json: true
            },
            function (error, response, body) {
                if( error ) {
                    deferred.reject();
                    return;
                }

                if ( response && response.statusCode !== 200) {
                    deferred.reject();
                    return;
                }

                if( body && body.meta && body.meta.code === 200 ) {
                    deferred.resolve(body.data);
                }else{
                    return deferred.reject();
                }
            });

        return deferred.promise;
    };
    this.loginInstagram = function(param) {

    }
}

module.exports = new User();