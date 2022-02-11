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

type Data = {
    products?: Product[];
    totals: number;
    page: number;
}

const handler =  async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const page = req.query.page
    const type = req.query.type
    let totals = 0
    let products = []

    try {
        const url = `http://localhost:3000/products?_page=${page}&_limit=12&features.type=${type}`
        console.log(url)
        const res = await fetch(url)
        if (res.status !== 200) {
        throw new Error("Failed to fetch")
        }
        products = await res.json()
        totals = res.headers.get('X-Total-Count')
    } catch (err) {
        // nothing
    }
    res.status(200).json({
        products,
        totals,
        page
    });
}
export default handler