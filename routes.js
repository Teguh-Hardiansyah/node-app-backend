const { addNotesHandler,getAllNotesHandler,getNoteByIdHandler } = require("./handler");

const routes = [{
    
    method: 'post',
    path: '/notes',
    handler: addNotesHandler,
},
{
  method: 'GET',
  path: '/notes',
  handler: getAllNotesHandler,
},
{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
}
];

module.exports = routes;
