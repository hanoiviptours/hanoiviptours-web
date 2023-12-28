import type { NextApiRequest, NextApiResponse } from "next";
const payment = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("reqbody", req.body);
  return res.status(200).json({ name: "hello " });
};
export default payment;
