'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "menuItems", deps: []
 * createTable "Tasks", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-07-03T02:07:52.765Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "menuItems",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Tasks",
            {

            },
            {}
        ]
    }
];

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
