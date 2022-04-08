const { validationResult } = require('express-validator')

module.exports = {
    main: (req,res) => {
        res.render('index', {
            session: req.session
        });
    },

    userdata: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            req.session.user = {
                ...req.body
            }

            if(req.body.remember) { //si marco el check de recordar
                const TIME_IN_MILISECONDS = 60000; //defino un tiempo en este caso 1 minuto
                res.cookie("color", req.session.user.color, { //creo la cookie poniendo el nombre de la misma y la info que quiero guardar
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }
            res.locals.user = req.session.user;
            res.redirect('/');
            
        }else{
            res.render('index', {
                errors: errors.mapped()
            })
        }
    },
    forget: (req,res)=>{
        if(req.cookies.color){
            res.cookie('color','', { maxAge: -1})
        }
        req.session.color = false;
        res.redirect('/')
    }
}