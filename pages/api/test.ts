import { NextApiRequest, NextApiResponse } from "next"

export default async (request: NextApiRequest, response: NextApiResponse) => {
   response.json({ 
      success: true,
      message: "Hello, world!" 
   });
}