import client from "@/util/database"
import Link from "next/link"

export default async function List() {
  const db = await client.db('language');
  const list = await db.collection('programming').find().toArray();
  return (
    <div>
      <center><h2>여기는 리스트야</h2></center>
      <div className="list-bg">
        {list.map(e=>
          <div className="list-item">
            <Link href={`/detail/${e._id}`}><p>{e.name}</p></Link>
            <Link href={`/edit/${e._id}`}><p>🔨</p></Link>
          </div>
        )}
      </div>
    </div>
  )
}