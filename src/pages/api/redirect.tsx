import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const targetUrl = 'https://vincentcavaleri.se/?ref=dealbooster';
    res.writeHead(301, { Location: targetUrl });
    res.end();
}