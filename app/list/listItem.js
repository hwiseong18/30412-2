'use client'

import Link from "next/link"

export default function ListItem(props) {
  return (
    <div className="list-bg">
        {props.list.map(e=>
          <div className="list-item" key={e._id}>
            <Link href={`/detail/${e._id}`}>{e.name}</Link>
            <span><Link href={`/edit/${e._id}`}>🔨</Link></span>
            <span style={{cursor:"pointer"}} 
              onClick={(ev)=>{
              fetch('/api/remove',
              {
                method:'DELETE',
                body: JSON.stringify({"id": e._id})
              })
              .then(res=>res.json())
              .then(json=>{
                if(json.msg==='success'){
                  ev.target.parentNode.style.opacity=0;
                  setTimeout(()=>{
                    ev.target.parentNode.style.display="none";
                  },1000);
                }
              })
            }}>❌</span>
          </div>
        )}
      </div>
  )
}