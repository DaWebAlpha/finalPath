export function handleError(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({
        title: "500 Page",
        error: "Internal Server Error"
    })
}