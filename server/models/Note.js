import mongoose from 'mongoose';

const Shema = mongoose.Shema;

const NoteShema = new Shema({
  title    : {type: String },
  text     : {type: String, required: true },
  color    : {type: String },
  createdAt: {type: Date }
});

const Note = mongoose.model('Note', NoteShema);
