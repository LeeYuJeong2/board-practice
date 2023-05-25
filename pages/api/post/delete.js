import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async  function handler(req, res){

    let session=await getServerSession(req, res, authOptions)

    const db=(await connectDB).db("board")
    let result=await db.collection('post').findOne({ 
        _id : new ObjectId(req.body)})



    console.log('리절트',result)
    console.log('세션',session)

    if(!session || session==null){
        return res.status(400).json('권한이 없습니다.')
    }



    if(req.method=='POST'){
        if(result.author == session.user.email || session.user.role=='admin'){
            const db=(await connectDB).db("board")
         let result=await db.collection('post').deleteOne({
        _id: new ObjectId(req.body)
            })
            return res.status(200).json('삭제완료')
         }else{
            return res.status(400).json('본인이 쓴 글만 지울 수 있습니다.')
            }
     //const db=(await connectDB).db("board")
    //  let result=await db.collection('post').deleteOne({
    //      _id: new ObjectId(req.body)
    //  })
    }
    }

