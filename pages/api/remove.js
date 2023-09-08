import client from "@/util/database"
import { ObjectId } from "mongodb"


export default async function handler(req, res) {
  if(req.method!=="DELETE")
    return res.status(400).json("뭐할려고")

  let data = JSON.parse(req.body)

  const db = await client.db('language')
  const ack = await db.collection('programming').deleteOne({"_id": new ObjectId(data.id)})

  if(ack.deletedCount>0)
    return res.status(200).json({"msg":"success"})
  else
    return res.status(500).json({"msg":"fail"})
}