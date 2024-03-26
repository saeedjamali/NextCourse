// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/connectToDB";

const handler = async (req, res) => {
    const { id } = req.query;
    const data = req.body;
    const method = req.method;
    const { status, message, isConnected } = await connectToDB();
    if (isConnected) {
        if (method == "GET") {

        }
        if (method == "POST") {

        }

        if (method == "PUT") {

        }

        if (method == "DELETE") {

        }








    } else {
        res.status(status).json({ message, status });
    }
}

export default handler