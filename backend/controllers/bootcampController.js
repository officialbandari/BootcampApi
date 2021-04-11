const Bootcamp = require('../models/bootcamp.schema')
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse')

const allBootcampApi = {

    getallbootcamps : asyncHandler(async (req, res, next) =>{

        try {

           const bootcamp = await Bootcamp.find();
           res.status(201).json({
               success : true,
               data : bootcamp
           })
    
        } catch (error) {
            res.send(error)
            
        }
    
    }),


    createBootcampApi : asyncHandler(async(req, res, next) =>{

        try {

            // const userboot = req.body
            // const newbootcamp = await Bootcamp(userboot)
            // const result = await newbootcamp.save();
            // res.status(201).send(result)

            // res.send('createBootcampApi')



            const bootcamp = await Bootcamp.create(req.body)
            res.status(201).json({
                success :true,
                data : bootcamp
            })

        } catch (error) {
            res.send(error)
            
        }

    }),


    getSingleBootcampApi : asyncHandler(async(req, res, next) =>{
        try {
            
            // const bootcamp = await Bootcamp.findOne(req.param.id)
            // res.send(bootcamp);
            // res.send('getSingleBootcampApi');
            





        } catch (error) {
            res.send(error);
            
        }

    }),

    patchBootcampApi : asyncHandler(async (req, res, next) =>{

        try {
            const bootcamp = await Bootcamp.findById(req.params.id)

            if(!bootcamp){
                return next(new ErrorResponse(`Bootcamp with  id ${req.params.id} was not found`, 404))
            }

            bootcamp  = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators : true
            })

            res.status(201).json({
                success : true,
                data : bootcamp
            })
        } catch (error) {
            res.send(error)
            
        }


    }),


    deleteBootcampApi : asyncHandler(async (req, res, next) =>{

        try {
            
            const bootcamp = await Bootcamp.findById(req.params.id)

            if(!bootcamp){
                return next(new ErrorResponse(`Bootcamp with  id ${req.params.id} was not found`, 404))
            }

          await bootcamp.remove()

            res.status(201).json({
                success : true,
                data : bootcamp
            })
        } catch (error) {
            res.send(error)
            
        }

    }),

    
}



module.exports = allBootcampApi