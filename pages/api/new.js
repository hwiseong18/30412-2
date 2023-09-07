import client from "@/util/database";


export default async function Handler(req, res) {
  if(req.method=="GET")
    res.status(200).json("가버려");

  const db =  await client.db('language');
  const ack = await db.collection('programming').insertOne(req.body);

  let msg = '';

  if(ack.acknowledged)
    msg = "success";
  else
    msg = "fail";

  res.redirect(302, `/message/${msg}`);
}