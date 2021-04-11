const asyncHandler = (controllerfucntion) = ( req, res, next) => 
Promise.resolve(controllerfucntion(req, res, next)).catch(next)

module.exports = asyncHandler