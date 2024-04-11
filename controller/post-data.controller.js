import { data } from "../model/data.models.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/apiHandler.js";
import { apiResponse } from "../utils/apiResponse.js";



const upload_data = asyncHandler(async(req,res)=>{
   
    const response = req.body;
   
    if(!response){
        throw new apiError(400,'error while reciving the data response from upload_data');
    }

    const insert_data = await data.insertMany(response);

    if(!insert_data){
        throw new apiError(400,'error while uploading the data in db' )
    }

    return res.status(200).json(new apiResponse(200,'data added sucessfully!'));
    
})


export {upload_data}