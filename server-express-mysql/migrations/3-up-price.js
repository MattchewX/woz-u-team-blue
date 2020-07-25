'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "price" on table "menuItems"
 *
 **/

var info = {
    "revision": 3,
    "name": "up-price",
    "created": "2020-07-23T17:30:15.793Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "menuItems",
        "price",
        {
            "type": Sequelize.DECIMAL(2),
            "field": "price"
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
