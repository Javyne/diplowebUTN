const { request, response } = require('express');


const isAdmin = (req = request, res = response, next) => {

    if(req.session.admin!==1){
        res.render('pages/401');
    };
    
    next();
}

module.exports = {
    isAdmin
};