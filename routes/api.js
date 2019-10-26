const express = require('express');
const router = express.Router();
const passport = require('passport');
const Alert = require('../models/alert');
const keys = require('../config/keys');

//get btc -> usd log
router.get('/btc', function(req, res){

    //get btc info from CMC API
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'USD',
            market_cap: response.data['1'].quote['USD'].market_cap,
            price: response.data['1'].quote['USD'].price,
            volume_24h: response.data['1'].quote['USD'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['USD'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
});

//get alerts
router.get('/alerts', (req, res) => {
    if(req.user){
        Alert.find({userId: req.user.id}).then((alerts) => {
            res.send(alerts);
        })
    }else{
        res.send({});
    }
})

//add a new alert
router.post('/save-alert', function(req, res){
    if(req.user){
        Alert.create({
            userId: req.user.id,
            currency: req.body.currency,
            condition: req.body.condition,
            amount: req.body.amount
        }).then(function(alert){
            res.send(alert);
        });
    }
    res.send({});
});

//delete an alert
router.delete('/alerts/:id', function(req, res){
    Alert.findByIdAndRemove({_id: req.params.id}).then(function(){
        res.send('deleted');
    });
});

//get btc -> btc log
router.get('/btc-btc', function(req, res){
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=BTC',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'BTC',
            market_cap: response.data['1'].quote['BTC'].market_cap,
            price: response.data['1'].quote['BTC'].price,
            volume_24h: response.data['1'].quote['BTC'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['BTC'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
})

//get btc -> eth log
router.get('/btc-eth', function(req, res){
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=ETH',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'ETH',
            market_cap: response.data['1'].quote['ETH'].market_cap,
            price: response.data['1'].quote['ETH'].price,
            volume_24h: response.data['1'].quote['ETH'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['ETH'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
})

//get btc -> xrp log
router.get('/btc-xrp', function(req, res){
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=XRP',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'XRP',
            market_cap: response.data['1'].quote['XRP'].market_cap,
            price: response.data['1'].quote['XRP'].price,
            volume_24h: response.data['1'].quote['XRP'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['XRP'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
})

//get btc -> bch log
router.get('/btc-bch', function(req, res){
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=BCH',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'BCH',
            market_cap: response.data['1'].quote['BCH'].market_cap,
            price: response.data['1'].quote['BCH'].price,
            volume_24h: response.data['1'].quote['BCH'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['BCH'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
})

//get btc -> ltc log
router.get('/btc-ltc', function(req, res){
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=LTC',
    qs: {
        'id': '1'
    },
    headers: {
        'X-CMC_PRO_API_KEY': keys.CMC.APIkey
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        //return a response
        res.send({
            currency: 'LTC',
            market_cap: response.data['1'].quote['LTC'].market_cap,
            price: response.data['1'].quote['LTC'].price,
            volume_24h: response.data['1'].quote['LTC'].volume_24h,
            circulating_supply: response.data['1'].circulating_supply,
            change_24h: response.data['1'].quote['LTC'].percent_change_24h
        });
    }).catch((err) => {
    console.log('API call error:', err.message);
    });
})

module.exports = router;