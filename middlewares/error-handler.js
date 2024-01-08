const errorHandler = (err , req , res , next) => {
    const statusCode = err.statusCode || 500 
    const message = err.message || "Something went wrong !"

    res.status(statusCode).render("error" , {error : message})
}
module.exports = errorHandler ; 