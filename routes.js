const { addNotesHandler } = require("./handler");

const routes = [{
    
    method: 'post',
    path: './notes',
    handler: addNotesHandler,
},
];

module.exports = routes;
