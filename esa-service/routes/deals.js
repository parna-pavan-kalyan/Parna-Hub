var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonresponce = {
    "handsetCards": [
      {imageName: 'udupi2', title: 'HOME', cols: 4, rows: 2 },
      {imageName: 'aniv', title: 'POSTER', cols: 4, rows: 2 },
      {imageName: 'grocery', title: 'Grocery', cols: 1, rows: 1 },
      {imageName: 'veg', title: 'Veg food', cols: 1, rows: 1 },
      {imageName: 'street', title: 'Street food', cols: 1, rows: 1 },
      {imageName: 'fruits', title: 'Fruits and veg', cols: 1, rows: 1 },
      {imageName: 'nonv', title: 'Non veg food', cols: 1, rows: 1 },
      {imageName: 'sweets', title: 'Sweets and bakery', cols: 1, rows: 1 },
      {imageName: 'fandm3', title: 'Fish and meat', cols: 1, rows: 1 },
      {imageName: 'pizza', title: 'Pizza and burger', cols: 1, rows: 1 },
      {imageName: 'fish2', title: 'Sea food', cols: 1, rows: 1 },
      {imageName: 'dairy', title: 'Dairy', cols: 1, rows: 1 },
      {imageName: 'shawarma', title: 'Shawarma and rolls', cols: 1, rows: 1 },
      {imageName: 'health', title: 'Healthcare', cols: 1, rows: 1 },
      {imageName: 'frozen', title: 'Frozen food', cols: 1, rows: 1 },
      {imageName: 'service2', title: 'Services', cols: 1, rows: 1 },
      {imageName: 'pet', title: 'Pet care', cols: 1, rows: 1 },
      {imageName: 'event3', title: 'Featured stores', cols: 4, rows: 3 }
    ],
    "webCards": [
      {imageName: 'udupi2', title: 'HOME', cols: 4, rows: 2 },
      {imageName: 'aniv', title: 'POSTER', cols: 4, rows: 2 },
      {imageName: 'grocery', title: 'Grocery', cols: 1, rows: 1 },
      {imageName: 'veg', title: 'Veg food', cols: 1, rows: 1 },
      {imageName: 'street', title: 'Street food', cols: 1, rows: 1 },
      {imageName: 'fruits', title: 'Fruits and veg', cols: 1, rows: 1 },
      {imageName: 'nonv', title: 'Non veg food', cols: 1, rows: 1 },
      {imageName: 'sweets', title: 'Sweets and bakery', cols: 1, rows: 1 },
      {imageName: 'fandm3', title: 'Fish and meat', cols: 1, rows: 1 },
      {imageName: 'pizza', title: 'Pizza and burger', cols: 1, rows: 1 },
      {imageName: 'fish2', title: 'Sea food', cols: 1, rows: 1 },
      {imageName: 'dairy', title: 'Dairy', cols: 1, rows: 1 },
      {imageName: 'shawarma', title: 'Shawarma and rolls', cols: 1, rows: 1 },
      {imageName: 'health', title: 'Healthcare', cols: 1, rows: 1 },
      {imageName: 'frozen', title: 'Frozen food', cols: 1, rows: 1 },
      {imageName: 'service2', title: 'Services', cols: 1, rows: 1 },
      {imageName: 'pet', title: 'Pet care', cols: 1, rows: 1 },
      {imageName: 'event3', title: 'Featured stores', cols: 4, rows: 3 }
    ]
  };
  res.json(jsonresponce);
});

module.exports = router;
