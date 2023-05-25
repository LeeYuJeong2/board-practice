import { connectDB } from "@/util/database"


export default async function User() {

    const db=(await connectDB).db("board")
    let result=await db.collection('user').find().toArray()
    console.log(result)

    return (
        <div className="p-20">
            <h4>가입페이지</h4>
            <form action="/api/post/user" method="POST">
                아이디 <input name="userId" placeholder="id"/>
                비밀번호 <input name="password" placeholder="password"/>
                <button type="submit">가입</button>
            </form>
        </div>
    )

    
  } 