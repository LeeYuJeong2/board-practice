import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){

    const db=(await connectDB).db("board")
    let comments=await db.collection('comment')
    .find({ parent : new ObjectId(req.query.id) }).toArray()
    console.log('댓글리스트',comments)
    return res.status(200).json(comments)
}