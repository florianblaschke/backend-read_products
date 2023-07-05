import dbConnect from "./../../../db/connect";
import Fish from "../../../db/Models/products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const product = await Fish.find();

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
