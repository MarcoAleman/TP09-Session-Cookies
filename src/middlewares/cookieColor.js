function cookieColor(req, res, next) {
    if(req.cookies.color) { //si esta guardado la coockie
        req.session.color = req.cookies.color; //inicia sesion
        res.locals.color = req.session.color; //tmb lo guardo en locals
    }
    next();
}

module.exports = cookieColor;