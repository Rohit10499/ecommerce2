const errorMiddleware=(err,req,res,next)=>{
const status=err.status || 500;
const message=err.message ||"BACKEND ERROR";
const extraDeatils=err.extraDeatils || "Error from Backend";

return res.status(status).json({
    message,extraDeatils
})
}
export default errorMiddleware;