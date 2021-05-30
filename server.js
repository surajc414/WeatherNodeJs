
    const express = require('express');
    const app          = express();
    const PORT         = process.env.PORT || 8000;
    const path         = require('path');
    const hbs          = require('hbs');
    const weatherRoute = require('./routes/weatherRoute.js');
    const partials     = path.join(__dirname, 'partials');
    const publicStatic = path.join(__dirname, 'public');

    app.use(express.static(publicStatic));
    
    app.set('view engine','hbs');
    hbs.registerPartials(partials);
    
    app.use(weatherRoute);



    app.get('*',(req,res)=>{
        res.render('404',{title:'Page Not Found',errorMsg:'Opps! Page Not Found'});
    });

    app.listen(PORT,(err)=>{
        if(err) throw err;
        console.log(`Listening port on ${PORT}`);
    })