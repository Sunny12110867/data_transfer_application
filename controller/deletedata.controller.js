import mongoose from 'mongoose'; // Import mongoose
import { data } from "../model/data.models.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/apiHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const deleteData = asyncHandler(async(req,res)=>{
  console.log('this si first one ');
    const { id } = req.params;
      
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new apiError(400,'Invalid data ID');
    }      

    const deletedData = await data.findByIdAndDelete(id);

    if (!deletedData) {
      throw new apiError(400,'jednlkjef;jnData not found');
    }
    console.log('skjd ekd kejd ')
    return res.status(200).json(new apiResponse(200,'Data deleted successfully'));
})

export default deleteData;
