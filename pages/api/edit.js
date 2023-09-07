import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
  if(req.method=="GET")
    res.status(200).json("가버려");

  const cpbody = {...req.body}
  delete cpbody._id;
  
  const db =  await client.db('language');
  const ack = await db.collection('programming').updateOne(
    {"_id": new ObjectId(req.body._id)},
    {$set: cpbody}
  );

  let msg = '';

  if(ack.acknowledged)
    msg = "success";
  else
    msg = "fail";

  res.redirect(302, `/message/${msg}`);
}