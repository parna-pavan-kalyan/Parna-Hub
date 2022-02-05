var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonresponce = {
    "handsetCards": [
      {imageName: 'udupi2', title: 'home', cols: 4, rows: 1 },
      {imageName: 'aniv', title: 'poster', cols: 4, rows: 1 },
      {imageName: 'grocery', title: 'grocery', cols: 1, rows: 1 },
      {imageName: 'veg', title: 'veg food', cols: 1, rows: 1 },
      {imageName: 'street', title: 'street food', cols: 1, rows: 1 },
      {imageName: 'fruits', title: 'fruits and veg', cols: 1, rows: 1 },
      {imageName: 'nonv', title: 'non veg food', cols: 1, rows: 1 },
      {imageName: 'sweets', title: 'sweets and bakery', cols: 1, rows: 1 },
      {imageName: 'fandm3', title: 'fish and meat', cols: 1, rows: 1 },
      {imageName: 'pizza', title: 'pizza and burger', cols: 1, rows: 1 },
      {imageName: 'fish2', title: 'sea food', cols: 1, rows: 1 },
      {imageName: 'dairy', title: 'dairy', cols: 1, rows: 1 },
      {imageName: 'shawarma', title: 'shawarma and rolls', cols: 1, rows: 1 },
      {imageName: 'health', title: 'healthcare', cols: 1, rows: 1 },
      {imageName: 'frozen', title: 'frozen food', cols: 1, rows: 1 },
      {imageName: 'service2', title: 'services', cols: 1, rows: 1 },
      {imageName: 'pet', title: 'pet care', cols: 1, rows: 1 },
      {imageName: 'event3', title: 'featured stores', cols: 4, rows: 3 }
    ],
    "webCards": [
      {imageName: 'udupi2', title: 'home', cols: 4, rows: 1 },
      {imageName: 'aniv', title: 'poster', cols: 4, rows: 1 },
      {imageName: 'grocery', title: 'grocery', cols: 1, rows: 1 },
      {imageName: 'veg', title: 'veg food', cols: 1, rows: 1 },
      {imageName: 'street', title: 'street food', cols: 1, rows: 1 },
      {imageName: 'fruits', title: 'fruits and veg', cols: 1, rows: 1 },
      {imageName: 'nonv', title: 'non veg food', cols: 1, rows: 1 },
      {imageName: 'sweets', title: 'sweets and bakery', cols: 1, rows: 1 },
      {imageName: 'fandm3', title: 'fish and meat', cols: 1, rows: 1 },
      {imageName: 'pizza', title: 'pizza and burger', cols: 1, rows: 1 },
      {imageName: 'fish2', title: 'sea food', cols: 1, rows: 1 },
      {imageName: 'dairy', title: 'dairy', cols: 1, rows: 1 },
      {imageName: 'shawarma', title: 'shawarma and rolls', cols: 1, rows: 1 },
      {imageName: 'health', title: 'healthcare', cols: 1, rows: 1 },
      {imageName: 'frozen', title: 'frozen food', cols: 1, rows: 1 },
      {imageName: 'service2', title: 'services', cols: 1, rows: 1 },
      {imageName: 'pet', title: 'pet care', cols: 1, rows: 1 },
      {imageName: 'event3', title: 'featured stores', cols: 4, rows: 3 }
    ]
  };
  res.json(jsonresponce);
});

module.exports = router;
