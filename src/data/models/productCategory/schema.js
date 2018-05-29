let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  title: { type: String, default: '' },
  slug: { type:String, required:true, unique: true, index: true},
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('ProductCategory', schema);

module.exports = model;

// get ( product )


module.exports.getOneProductCategory = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.findOne({slug: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getProductCategories = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

