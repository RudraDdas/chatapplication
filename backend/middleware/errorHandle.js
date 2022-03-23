

const errorhandler = (err, req, res, next) => {
    
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({message:err.message , stack: "production" ? null : err.stack})
}

const urlnotFound = (req,res,next) => {
    const err = new Error("url not found" + req.originalUrl)
    req.status(404)
    next(err)
}


module.exports = {errorhandler , urlnotFound}