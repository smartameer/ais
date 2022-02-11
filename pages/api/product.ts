import type { NextApiRequest, NextApiResponse } from 'next'

interface Features {
    data: string;
    superwifi: boolean;
    type: string;
}
interface Product {
    id: number;
    name: string;
    short_desc: string;
    description: string;
    picture: string;
    slug: string;
    price: string;
    tax: string;
    memory: number;
    contacts: number;
    features: Features;
    tags: string[];
    type: string[];
}


const handler =  async (
    req: NextApiRequest,
    res: NextApiResponse<Product>
) => {
    const pslug = req.query.pslug
    const pid = req.query.pid
    let product = null

    try {
        let url = 'http://localhost:3000/products'
        if (pid) {
          url += '/' + pid
        } else {
          url += '?slug=' + pslug
        }
        const res = await fetch(url)
        if (res.status !== 200) {
          throw new Error("Failed to fetch")
        }
        product = await res.json()
    } catch (err) {
        // nothing
      res.status(404);
    }
    if (product) {
      res.status(200).json(product);
      return
    }
    res.status(404).send({});
}
export default handler