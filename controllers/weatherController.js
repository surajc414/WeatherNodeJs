
    const index = (req,res)=>{

        res.render('index',{title:'Weather'});
    }
    const about = (req,res)=>{
        res.render('about',{title:'About Us'});
    }
    
    const weather = (req,res)=>{
        res.render('weather',{title:'Weather Data'});
    }
    
    module.exports = {index,about,weather};