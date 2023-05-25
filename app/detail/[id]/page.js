import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from './Comment'
import { notFound } from "next/navigation"


export default async function Detail(props){

    const db=(await connectDB).db("board")
    let result=await db.collection('post').findOne({ 
        _id : new ObjectId(props.params.id)})
        // let result=await db.collection('post').findOne({ 
        //     title : props.params.id })
    console.log('프롭스',props)

    if(result===null){
        return notFound()
    }

    return(
        <div>
            <h2>상세페이지</h2>

            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment parent={result}/>
        </div>
    )
}