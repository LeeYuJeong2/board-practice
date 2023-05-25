import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    const db=(await connectDB).db("board")
    let result=await db.collection('post').deleteOne({
        _id: new ObjectId(req.query.all)
    })
    console.log(result)
       return res.status(200).json('삭제완료')
}