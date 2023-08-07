'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import Pagination from "./Pagination"


export default function ListItem({result}){


  const [ currentPage, setCurrentPage] = useState(1) //시작 페이지

  const [ postPerPage, setPostPerPage] = useState(5) //페이지에 보여줄 게시글의 갯수 

  const indexOfLastPost = currentPage * postPerPage 
  
  const indexOfFirstPost = indexOfLastPost -postPerPage 

  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost) 
  //첫번째 인자로 받은 배열의 인덱스부터 마지막 인자로 받은 인덱스 -1 까지 원본 배열에서 잘라내어 반환
  //5개씩 데이터를 바운딩한다. 


//페이지 이동 
  const paginate =(pageNumbers) => setCurrentPage(pageNumbers)
  

   return (
    <>
    <div>
    {
        currentPosts.map((ele,idx)=>
           <div className="list-item" key={idx}>
                {/* <Link href={`/detail/${ele._id}`}> */}
              <Link  prefetch={false} href={'/detail/' + ele._id}> 
                 <h4>{ele.title}</h4>
                 </Link>
               <Link href={'/edit/' +currentPosts[idx]._id}>🏏</Link>
               {/* <span onClick={(e)=>{
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
      <Pagination postsPerPage={postPerPage} totalPosts={result.length} paginate={paginate}/>
      </>
    )
}