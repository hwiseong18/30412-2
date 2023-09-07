import { ObjectId } from "mongodb"
import client from "@/util/database"

export default async function Edit(props) {
  const db = await client.db('language');
  const res = await db.collection('programming').findOne({"_id": new ObjectId(props.params.id)})

  return (
    <div>
      <center><h2>여기는 바껴</h2></center>
      <form action="/api/edit" method="POST">
        <div className="detail">
          <center>
            <div className="new-item">
              이름 : <input type="text" name="name" defaultValue={res.name}/>
            </div>

            <div className="new-item">
              만든 사람 : <input type="text" name="producer" defaultValue={res.producer}/>
            </div>

            <div className="new-item">
              날짜 : <input type="text" name="date" defaultValue={res.date}/>
            </div>
          </center>
          <input type="hidden" name="_id" value={res._id}/>
          <center><button className="edit-btn" type="submit">바꾸기</button></center>
        </div>
      </form>
    </div>
  )
}