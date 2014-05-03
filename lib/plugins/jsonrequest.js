'use strict';

module.exports = {
    processRequest: function (req) {
        var contentType = req.header('Content-Type');
        if (contentType == null) {
            req.header('Content-Type', 'application/json');
        } else if (contentType !== 'application/json') {
            return;
        }
        req.body = JSON.stringify(req.body);
    }
};