import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'


export default async function handler(req, res){
    console.log("오니")
    console.log(req.body)


    const db=(await connectDB).db("board")
    let user=await db.collection('user_cred').findOne({ 
        email : req.body.email })

        console.log(user)

    if(req.method=='POST'){

        if(!req.body.name.trim()){
            return res.status(200).json("이름을 입력해주세요!")
        }
        if(!req.body.email.trim()){
            return res.status(200).json("이메일을 입력해주세요!")
        }
        if(!req.body.password){
            return res.status(200).json("비밀번호 입력해주세요!")
        }

        if(!user){
            let hash=await bcrypt.hash(req.body.password, 10)
            console.log(hash)
            req.body.password=hash
   
            const db=(await connectDB).db("board")
            await db.collection('user_cred').insertOne(req.body)
             res.status(200).json('가입완료')
             }

        if(req.body.email==user.email){
            return res.status(200).json("중복되는 이메일이 있습니다.")
          }

        }

    }
