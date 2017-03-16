var config = {
    host: 'http://localhost',
    port: '3000',
    restApis: {
        instagram: {
            api_version: 'v1',
            rest_url: function () {
                return '/instagram/api/' + this.api_version;
            }
        }
    },
    instagramApi : {
        baseURL: "https://api.instagram.com",
        api_version: "v1",
        access_token: "691623.1419b97.479e4603aff24de596b1bf18891729f3",
        getURL: function () {
            return this.baseURL + "/" + this.api_version;
        }
    }
};

module.exports = config;