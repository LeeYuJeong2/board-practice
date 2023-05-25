import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){

    console.log(props)
    const db=(await connectDB).db("board")
     let result=await db.collection('post').findOne({ 
         _id : new ObjectId(props.params.id)})
        console.log('수정페이지',result)
        // await db.collection('post').updateOne({수정할게시물정보},
        //     { $set : { title: '바보',content: '똥깨' }}
        //     )

    return(
        <div className="p-20">
        <h4>글수정페이지</h4>
        <form action="/api/post/update" method="POST">
            <input type="hidden" name="id" value={result._id} />
            글제목 <input name="title" defaultValue={result.title}/>
            글내용 <input name="content" defaultValue={result.content}/>
            <button type="submit">글수정</button>
        </form>
    </div>
    )
}