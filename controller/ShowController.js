import { data } from "../model/data.models.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/apiHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const ShowController = asyncHandler(async(req,res)=>{
    console.log('first');
    const response = await data.find();
    console.log('second');
    if(!response){
        throw new apiError(400,'error while calling showController response');
    }
  
    return res.status(200).json(new apiResponse(200, response, 'data getting successfully'));
});

export default ShowController;
