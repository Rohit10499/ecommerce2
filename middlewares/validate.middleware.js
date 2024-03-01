const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status=422;
    const message ="Fill the input properly";
    const extraDeatils= err.errors[0].message;
    const error={
        status,message,extraDeatils
    }
    console.log(error);
    // res.status(400).json({ msg: message });
    next(error)
  }
};
export default validate;
