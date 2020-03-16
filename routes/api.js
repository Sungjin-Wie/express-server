var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

var url = 'http://api1.emmafit.co.kr/franchisee_maplist_json.do';

router.get('/', (req, res) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports = router;



// var request = require('request');
// var express = require('express');
// var router = express.Router();

// var url = 'http://api1.emmafit.co.kr/franchisee_maplist_json.do';

// router.get('/', function(req, res) {
//     request(
//         url, 
//         function(err, res, body) {
//             console.log("error:", err);
//             console.log("statusCode:", res && res.statusCode);
//     })
//     .pipe(res);
// });

// module.exports = router;