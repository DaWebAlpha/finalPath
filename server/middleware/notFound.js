export function notFound(req, res){
    res.status(404).json({
        title: "404 Page",
        error: "Page could not be found"
    })
}