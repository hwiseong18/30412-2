import client from "@/util/database";
import Link from "next/link";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = await client.db('language');
  const res = await db.collection('programming').findOne({"_id": new ObjectId(props.params.id)})

  return (
    <div>
      <center><h2>여기는 디테일해</h2></center>
      <div className="detail">
        <div className="detail-item">
          이름 : {res.name}
        </div>

        <div className="detail-item">
          만든 사람 : {res.producer}
        </div>

        <div className="detail-item">
          날짜 : {res.date}
        </div>
        <Link href={`/edit/${res._id}`}><button className="edit-btn">고쳐</button></Link>
      </div>
    </div>
  )
}