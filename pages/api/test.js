import { connectDB } from "@/util/database"


export default async function handler(req, res){
    console.log(req.query)
    // const db=(await connectDB).db("board")
    // let result=await db.collection('post').find().toArray()
    // return res.status(200).json(result)
}
    