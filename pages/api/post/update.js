import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){

    const db=(await connectDB).db("board")
    console.log('뭐날아옴',req.body)

     let result=await db.collection('post').findOne({ 
          _id : new ObjectId(req.body.id)})
         console.log('서버에 온 수정페이지',result)


    if(req.method=='POST'){
        console.log(req.body)
        if(req.body.title.trim()==''){
            return res.status(200).json("제목이 없습니다")
    }
    if(req.body.content.trim()==''){
        return res.status(200).json("내용이 없습니다")
}
    try {
        await db.collection('post').updateOne(result,
            { $set : { title: req.body.title, content: req.body.content }}
            )
         return res.redirect(302,'/list')
    } catch (error) {
        return res.status(200).json(error)
    }

       }
    }
