'use client'
import {useEffect, useState} from 'react'

export default function Comment({ parent }) {
    let [content, setContent] = useState('')
    let [ lists, setLists ]= useState([])
    let [ listNew, setListNew ] =useState([])
    let [like, setLike]=useState(0)

    useEffect(()=>{
        console.log("이펙트")
        fetch('/api/comment/commentList?id='+parent._id)
        .then(res=>res.json())
        .then(result => {
            setLists(result)
        })
    },[listNew])

    return (
        <div>
          <div>댓글목록</div>
          {
            lists.length>0 ?
            lists.map((ele,idx)=>{
                return (
                    <span key={idx}>{ele.content} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;작성자:{ele.author} <br /></span>
                )
            }) : '댓글 로딩중'
          }
          <input value={content} onChange={(e)=>{ setContent(e.target.value) }} />
          <button onClick={()=>{ 
            console.log(parent)
            console.log(content)
             fetch('/api/comment/newComment', { method : 'POST', 
             body: JSON.stringify({
                  content: content,
                    parent: parent._id
                    })
            }).then(res=>res.json())
            .then(result=>{
                console.log('다시조회한거',result)
                setListNew(result.content)
                setContent('')
                lists.concat(listNew)
            })
         }}>
                댓글전송</button>
        </div>
    )
  } 