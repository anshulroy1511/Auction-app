import ErrorHandler from "../middlewares/error.js";

export const register = (req, res , next) => {
    if(!req.files || Object.keys(req.files).length ===0 ){
        
        // handle error by error handler-----------
        return next(new ErrorHandler("profile image is required"), 400);
        // return res.status(400).json({
        //     success:false,
        //     message:"profile image is required "
        // });
    }
};