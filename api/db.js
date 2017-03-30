const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/film');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('连接数据库成功');
});


const ListSchema = mongoose.Schema({
    "name" : String,
    "description" : String,
    "createTimer" : String,
    "url" : String,
    "cover" : String
});

ListSchema.pre('save', function (next) {
  if (!this.createTimer) this.createTimer = new Date().toLocaleString();
  next();
});

module.exports = {
  list:mongoose.model('list',ListSchema)
}
