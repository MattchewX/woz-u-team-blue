'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "description" to table "menuItems"
 * addColumn "price" to table "menuItems"
 *
 **/

var info = {
    "revision": 2,
    "name": "added-price-desc",
    "created": "2020-07-23T02:29:55.959Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "menuItems",
            "description",
            {
                "type": Sequelize.STRING,
                "field": "description"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "menuItems",
            "price",
            {
                "type": Sequelize.DECIMAL,
                "field": "price"
            }
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
