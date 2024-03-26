// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/connectToDB";
import courseModel from "@/Models/courses"

const handler = async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  const method = req.method;
  const { status, message, isConnected } = await connectToDB();
  if (isConnected) {
    if (method == "GET") {
      const statusGet = await courseModel.find();
      if (statusGet) {
        res.status(200).json({ message: "لیست بروز شد", data: statusGet })
      } else {
        res.status(401).json({ message: "خطا در بروزرسانی لیست" })
      }
    }
    if (method == "POST") {

      try {
        const statusPost = await courseModel.create(data)
        if (statusPost) res.status(200).json({ message: "دوره با موفقيت افزوده شد." })
        else res.status(401).json({ message: "خطا در ثبت دوره" })
      } catch (error) {
        res.status(401).json({ message: "خطا در ثبت دوره" })
      }


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