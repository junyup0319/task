var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ajouuniv', function(req, res, next) {
    res.render('ajou_univ');
});

router.get('/modal', function(req, res, next) {
    res.render('modal');
});

router.get('/instagram', function(req, res, next) {
    res.render('instagram');
});

router.get('/firebase', function(req, res, next) {
    res.render('firebase');
});

router.get('/kakaotalk', function(req, res, next) {
    res.render('kakaotalk_login');
});

router.get('/kakaotalk/chatting_rooms', function(req, res, next) {
    res.render('kakaotalk_chatting_rooms');
});

router.get('/kakaotalk/friends', function(req, res, next) {
    res.render('kakaotalk_friends');
});

router.get('/kakaotalk/profile', function(req, res, next) {
    res.render('kakaotalk_profile');
});

router.get('/kakaotalk/chatting', function(req, res, next) {
    res.render('kakaotalk_chatting');
});

router.get('/kakaotalk/setting', function(req, res, next) {
    res.render('kakaotalk_setting');
});

router.get('/calculator', function(req, res, next) {
    res.render('calculator');
});

router.get('/jsonfilter', function(req, res, next) {
    res.render('json_filter');
});


router.get('/textFinder', function(req, res, next) {
    res.render('textFinder');
});

router.get('/fractal', function(req, res, next) {
    res.render('fractal');
});

router.get('/homepage', function(req, res, next) {
    res.render('homepage');
});

router.get('/homepage/masonry', function(req, res, next) {
    res.render('homepage.masonry.pug');
});

router.get('/test', function(req, res, next) {
    res.render('test.pug');
});

router.get('/driveSystem', function(req, res, next) {
    res.render('driveSystem.pug');
});


router.get('/asyncExample', function(req, res, next) {
    res.render('asyncExample.pug');
});


router.get('/driveTest', function(req, res, next) {
    res.render('driveTest.pug');
});

router.get('/drive', function(req, res, next) {
    res.render('drive.pug');
});

router.get('/broadcast', function(req, res, next) {
  res.render('broadcast');
});


module.exports = router;
