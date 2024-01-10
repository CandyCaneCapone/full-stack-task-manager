const errorHandler = (err , req , res , next) => {
    let statusCode = err.statusCode || 500 
    let message = err.message || "Something went wrong !"

    if (err.name === "ValidationError") {
        message = "Please provide valid data"
    }
    if (err.name === "CastError") {
        message = "Task not found"
    }

    console.log(err)
    res.status(statusCode).render("error" , {message})
}
module.exports = errorHandler ; 