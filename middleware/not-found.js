const notFound = (err,req, res,next) => {console.log('here'); res.status(404).send('Route does not exist')}

module.exports = notFound
