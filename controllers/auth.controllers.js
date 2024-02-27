
const home=async(req,res)=>{
    try {
        res.status(200).send("Welcome to backend")
    } catch (error) {
        console.log(error)
    }
}

const register= async(req,res)=>{
try {
    let {name,email,phone,password}=req.body;
    res.status(200).send({message:"welcome to register page"})
} catch (error) {
    res.status(404).send({
        message:"Page not found"
    })
}



}

export {
    home,
register

}