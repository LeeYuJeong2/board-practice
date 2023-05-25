'use client'

import Link from "next/link"


export default function ListItem({result}){


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
                // fetch('/api/post/delete',
                // {method : 'POST', body : result[idx]._id})
                // .then((r)=>{
                //   if(r.status == 200) {
                //     return r.json()
                //   } else {
                //     //서버가 에러코드전송시 실행할코드
                //   }
                // })
                // .then(()=>{ 
                //   //성공시 실행할코드
                //     e.target.parentElement.style.opacity=0;
                //     setTimeout(()=>{
                //       e.target.parentElement.style.display='none'
                //     },1000)
                // }).catch((error)=>{
                //   //인터넷문제 등으로 실패시 실행할코드
                //   console.log(error)
                // })
                fetch(`/api/abc/${result[idx]._id}`)
                .then(()=>{
                  e.target.parentElement.style.opacity=0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display='none'
                  })
                })
               }}>🗑️</span>
           <p>1월 1일</p>
          </div>
        )
      }
      </div>
    )
}