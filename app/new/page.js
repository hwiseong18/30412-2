export default function New() {
  return (
    <div>
      <center><h2>여기는 새로워</h2></center>
      <form action="/api/new" method="POST">
        <div className="detail">
          <center>
            <div className="new-item">
              이름 : <input type="text" name="name"/>
            </div>

            <div className="new-item">
              만든 사람 : <input type="text" name="producer"/>
            </div>

            <div className="new-item">
              날짜 : <input type="text" name="date"/>
            </div>
          </center>
        <center><button type="submit" className="edit-btn">등록하기</button></center>
        </div>
      </form>
    </div>
  )
}