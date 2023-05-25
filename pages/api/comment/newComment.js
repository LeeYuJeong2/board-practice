import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async  function handler(req, res){

    let session=await getServerSession(req, res, authOptions)

    //const db=(await connectDB).db("board")
    // let result=await db.collection('post').findOne({ 
    //     _id : new ObjectId(req.body)})

    console.log('세션',session)
    console.log(JSON.parse(req.body))

    let parse=JSON.parse(req.body)

    if(!session){
        return res.status(400).json('로그인 해주세요')
    }

    if(req.method=='POST'){
        parse.author=session.user.email
        parse.parent= new ObjectId(parse.parent)
        parse.author=session.user.name
        console.log('파싱한거',parse)
        const db=(await connectDB).db("board")
        let result=await db.collection('comment').insertOne(parse)

        // let comments=await db.collection('comment')
        // .find({ parent : new ObjectId(parse.parent) }).toArray()
        
       // console.log('재조회',comments)

        return res.status(200).json(parse)
    }
}
