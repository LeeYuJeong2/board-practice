import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async  function handler(req, res){

    let session=await getServerSession(req, res, authOptions)

    const db=(await connectDB).db("board")
    let result=await db.collection('like').findOne({ 
        likePost : new ObjectId(req.body)})

    console.log('세션',session)
    console.log('라이크',req.body)

    let saveLike={
        likeUser : session.user.email
        ,likePost : new ObjectId(req.body)
    }


    if(!session){
        return res.status(400).json('로그인 해주세요.')
    }

    if(result){
        console.log('리절트',result)
        console.log('이미 좋아한 게시물입니다.')
        return res.status(400).json('이미 좋아한 게시물입니다.')
    }

    if(req.method=='POST'){
         const db=(await connectDB).db("board") 
         let result=await db.collection('like').insertOne(saveLike)
         return res.status(200).json('좋아요 등록완료')
    }
}
