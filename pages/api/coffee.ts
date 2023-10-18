import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  ProfJerome: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ ProfJerome: 'Decaf and no sugar no cream, please.' })
}