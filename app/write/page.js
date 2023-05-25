import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){

    let session = await getServerSession(authOptions)

    if(!session){
        return(
            <div>로그인 먼저 하세요</div>
        )
    }else{

    return (
        <div className="p-20">
            <h4>글작성페이지</h4>
            <form action="/api/post/new" method="POST">
                글제목 <input name="title" placeholder="글제목"/>
                글내용 <input name="content" placeholder="글내용"/>
                <button type="submit">글 등록</button>
            </form>
        </div>
        )
    }
}