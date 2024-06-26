const {nanoid} = require ('nanoid');

const addNotesHandler = (Request, h) => {
    const { title, tag, body } = request.payload;
    const id = nanoid(16);

    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };
   
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: {
            noteId: id,
          },
        });
        response.code(201);
        return response;
      }
     
      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
};

const getAllNotesHandler = () => ({
  status: 'succes',
  data: {
    notes,
  },
})

const getNoteByIdHandler =  (request, h) => {
    const {id} = request.params;

    const note = note.filter((n) => n.id === id)[0];


if ( note !== undefined) {
  return {
    status: 'succes',
  
  data: {
    note,
  },
};
}

const respone = h.response ({
  status: 'fail',
  message: 'catatan tidak ditemukan',
});
response.code(404);
return respone;

};



module.exports = {addNotesHandler, getAllNotesHandler,getNoteByIdHandler};
