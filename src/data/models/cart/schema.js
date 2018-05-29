let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  hoten: {type: String},
  phone: {type: String},
  email: {type: String},
  diachi: {type: String},
  cart: [Schema.Types.Mixed],
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('Cart', schema);

module.exports = model;


module.exports.getCart = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

