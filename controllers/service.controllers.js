import { Service } from "../models/service.models.js";

const service = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(404).json({ msg: "No service found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log("Service backend error", error);
  }
};

export { service };
