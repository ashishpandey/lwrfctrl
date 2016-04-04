"use strict";

module.exports = app => {
    [
        'system'
    ].map(route => {
        require('./' + route + '.js')(app)
    });
};