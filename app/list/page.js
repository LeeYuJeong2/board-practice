

import { connectDB } from "@/util/database"
import ListItem from "./ListItem"


export const dynamic = 'force-dynamic' 

export default async function List() {

  // const [ currentPage, setCurrentPage] = useState(1)

  // const [ postPerPage, setPostPerPage] = useState(5)

  // const indexOfLastPost = currentPage * postPerPage //시작 인덱스
  
  // const indexOfFirstPost = indexOfLastPost -postPerPage //마지막 인덱스

    const db=(await connectDB).db("board")
    let result=await db.collection('post').find().toArray()
    console.log(result)

    
  // const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost) //5개씩 바운딩 시키기 



    return (
      <div className="list-bg">
        <ListItem result={result} />
      </div>
    )
  } 