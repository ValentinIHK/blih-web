var express = require('express');
var router = express.Router();
var Blih = require('blih');

router.get('/gettoken', function(req, res) {
    const api = new Blih({ email: req.query.email, password: req.query.password });
    api.listRepositories()
        .then(data => {
            return res.status(200).send({token: api.token, status: 200})
        }).catch(e => {
            return res.status(401).send({response: "Unauthorized", status: 401})
    });
});

router.get('/repositories', function(req, res) {
    if (req.query.token == null)
        return res.status(401);
    const api = new Blih({ email: req.query.email, token: req.query.token});
    api.listRepositories()
        .then(data => {
            return res.status(200).send({repositories: data, status: 200})
        })
        .catch(e => {
            return res.status(401).send({response: e, status: 401})
        });
});

router.get('/acls', function(req, res) {
    if (req.query.token == null)
        return res.status(401);
    const api = new Blih({email: req.query.email, token: req.query.token})
    api.getACL(req.query.repo)
        .then(response => {
            return res.status(200).send({data: response})
        }).catch(e => {
            return res.status(401).send({response: e, status: 401})
    })
});

module.exports = router;
