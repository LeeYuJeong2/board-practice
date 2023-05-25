import { connectDB } from "@/util/database"

export default async function handler(req, res){
         const db=(await connectDB).db("board")
         let {userId}=req.body
         console.log('날린아이디',userId)
         console.log('아렇게도되나?',req.body.userId)
        let user=await db.collection('user').findOne({userId})
        console.log('찾은유저',user)

    if(req.method=='POST'){
        if(req.body.id==''){
            return res.status(200).json("아이디를 입력하세요")
        }
        if(user.length!=0){
        return res.status(400).json("이미 존재하는 ID입니다.")
        }
        if(req.body.password==''){
        return res.status(200).json("비밀번호를 입력하세요")
        }    
    try {
         const db=(await connectDB).db("board")
         let newUser=await db.collection('user').insertOne(req.body)
          return res.redirect(302,'/user')
    } catch (error) {
        return res.status(200).json(error)
    }

       }
    }
