var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Product = mongoose.model('Product')
const ProductCategory = mongoose.model('ProductCategory')
const Setting = mongoose.model('Setting')
const Information = mongoose.model('Information')
const Category = mongoose.model('Category')
const Seo = mongoose.model('Seo')
const Cart = mongoose.model('Cart')
let bodyParser = require('body-parser')
let Mailer = require('./services/mailgun');
let axios = require('axios')
const fs = require("fs");
const login = require("facebook-chat-api");

// Create simple echo bot

// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),


login({email: 'mrvluan@gmail.com', password: 'Ll114122!'}, (err, api) => {
  if(err) return console.error(err);
  fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
  router.get('/test', async (req, res) => {
    let setting = await Setting.findOne({})
    let adminId = (setting || {}).adminId || 100004231235930
    let token = '1503338743115103|_02iBBKBP7cZnhNJOm7DniCBNyw'
    // let thongbao = encodeURI("Có đơn hàng mới")
    let thongbao =
      `Có đơn hàng mới trên Happy green market
test
abc
`

    api.sendMessage(thongbao, adminId)

    res.send('ok')
  })

router.post('/cart/new', bodyParser.json() ,async (req, res) => {
  console.log('new cart')
  let setting = await Setting.findOne({})
  let adminId = (setting || {}).adminId || 100004231235930
  let emailAdmin = (setting || {}).emailAdmin || "luanlv2591@gmail.com"
  Cart.create(req.body, (err, resData) => {
    if(err) {
      res.sendStatus(400)
    } else {
      Mailer.sendNewOrderMail(emailAdmin, req.body.hoten, req.body.phone, req.body.diachi)
      // Mailer.sendNewOrderMail('luanlv2591@gmail.com', resData.name, resData.phone)
      let thongbao =
`Có đơn hàng mới trên Happy green market
Tên: ${resData.hoten}
SDT: ${resData.phone}
Địa chỉ: ${resData.diachi}
Email: ${resData.email}`

      api.sendMessage(thongbao, adminId)

      res.send(resData)
    }
  })
})

});

router.get('/cart', async (req, res) => {
  Cart.find({}).sort({created_at: -1}).exec((err, resData) => {
    if(err){
      res.sendStatus(400)
    } else {
      res.send(resData)
    }
  })
})

router.post('/productcategory/new', bodyParser.json() ,(req, res) => {
  ProductCategory.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/productcategory/delete', bodyParser.json() ,(req, res) => {
  ProductCategory.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/productcategory/update', bodyParser.json() ,(req, res) => {
  ProductCategory.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/product/new', bodyParser.json() ,(req, res) => {
  Product.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/product/delete', bodyParser.json() ,(req, res) => {
  Product.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/product/update', bodyParser.json() ,(req, res) => {
  Product.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/post/new', bodyParser.json() ,(req, res) => {
  Post.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/post/delete', bodyParser.json() ,(req, res) => {
  Post.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/post/update', bodyParser.json() ,(req, res) => {
  Post.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/setting/update', bodyParser.json() ,(req, res) => {
  Setting.findOneAndUpdate({id: "setting"}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
})

router.post('/information/update', bodyParser.json() ,(req, res) => {
  console.log('update !!!!!!!')
  console.log(req.body)
  Information.findOneAndUpdate({id: "information"}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
})

router.post('/category/new', bodyParser.json() ,(req, res) => {
  Category.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/category/delete', bodyParser.json() ,(req, res) => {
  Category.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/category/update', bodyParser.json() ,(req, res) => {
  Category.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/seo/new', bodyParser.json() ,(req, res) => {
  Seo.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/seo/update', bodyParser.json() ,(req, res) => {
  Seo.findOneAndUpdate({url: req.body.url}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})




module.exports = router;
