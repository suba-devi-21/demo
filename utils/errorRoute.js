const errorRoute = (req, res, next) => {
    res.status(404).json({message: 'Not found'});

    next()
 }
 module.exports=errorRoute