'use client'

import Link from "next/link"
import { useState } from "react"


export default function ListItem({result}){

  let [ like, setLike ]=useState(0);

   return (
    <div>
    {
        result.map((ele,idx)=>
           <div className="list-item" key={idx}>
                {/* <Link href={`/detail/${ele._id}`}> */}
              <Link  prefetch={false} href={'/detail/' + ele._id}> 
                 <h4>{ele.title}</h4>
                 </Link>
               <Link href={'/edit/' +result[idx]._id}>🏏</Link>
               <span onClick={(e)=>{
                fetch('/api/post/delete',
                {method : 'POST', body : result[idx]._id})
                .then((r)=>{
                  if(r.status == 200) {
                    e.target.parentElement.style.opacity=0;
                    setTimeout(()=>{
                      console.log(e)
                      e.target.parentElement.style.display='none'
                    },1000)
                    r.json().then(
                      msg=> alert( msg)
                    )
                  } else {
                    //서버가 에러코드전송시 실행할코드
                    r.json().then(esg=>{
                      alert(esg)
                      return false;
                    })
                  }
                }).catch((error)=>{
                  //인터넷문제 등으로 실패시 실행할코드
                  console.log(error)
                })
                // fetch(`/api/abc/${result[idx]._id}`)
                // .then(()=>{
                //   e.target.parentElement.style.opacity=0;
                //   setTimeout(()=>{
                //     e.target.parentElement.style.display='none'
                //   })
                // })
               }}>🗑️</span>
           <p>1월 1일</p>
           <span onClick={()=>{
            fetch('/api/like/save',{
              method: 'POST',
              body: result[idx]._id
            }).then((res)=>{
              if(res.status == 200) {
                setLike(like+1)
              }else{
                res.json().then(
                  msg => alert(msg)
                )
              }
            })
           }}>❤️</span>
           <p>좋아요 : {like}</p>
{/* 
           <span onClick={()=>{
            fetch('/api/like/save',{
              method: 'POST',
              body: result[idx]._id
            }).then( res => res.json() )
            .then( result => {
              alert(result)
            })
           }}>❤️</span>
            */}
          </div>
          
        )
      }
      </div>
    )
}