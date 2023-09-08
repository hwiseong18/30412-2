import client from "@/util/database"
import Link from "next/link"
import ListItem from "./listItem";

export default async function List() {
  const db = await client.db('language');
  const list = await db.collection('programming').find().toArray();
  return (
    <div>
      <center><h2>여기는 리스트야</h2></center>
      <ListItem list={list}/>
    </div>
  )
}