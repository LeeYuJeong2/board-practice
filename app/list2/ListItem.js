'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import Pagination from "./Pagination"

export default function ListItem({result}){

  // useState를 사용해 현재 페이지 상태를 정의합니다. 초기값은 1로 설정하여 첫 페이지를 보여줍니다.
  const [ currentPage, setCurrentPage] = useState(1) 

  // 페이지당 몇 개의 게시글을 보여줄 것인지 정의하는 상태입니다. 현재는 페이지당 5개의 게시글을 보여주도록 설정되어 있습니다.
  const [ postPerPage, setPostPerPage] = useState(5) 

  // 현재 페이지의 마지막 게시글의 인덱스를 계산합니다.
  const indexOfLastPost = currentPage * postPerPage 

  // 현재 페이지의 첫 게시글의 인덱스를 계산합니다.
  const indexOfFirstPost = indexOfLastPost - postPerPage 

  // slice를 사용해 현재 페이지에 해당하는 게시글만 선택합니다.
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost) 

  // 페이지 번호를 클릭했을 때 실행되는 함수입니다. 클릭한 페이지 번호를 현재 페이지 상태로 설정합니다.
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  

  return (
    <>
    <div>
    {
      // currentPosts 배열을 순회하면서 각 게시글을 표시합니다.
      currentPosts.map((ele, idx) =>
        <div className="list-item" key={idx}>

          <Link prefetch={false} href={'/detail/' + ele._id}> 
            <h4>{ele.title}</h4>
          </Link>

        
          <Link href={'/edit/' + currentPosts[idx]._id}>🏏</Link>
        </div>
      )
    }
    </div>

    // Pagination 컴포넌트를 표시합니다. 페이지당 게시글 수, 총 게시글 수, paginate 함수를 props로 전달합니다.
    <Pagination postsPerPage={postPerPage} totalPosts={result.length} paginate={paginate}/>
    </>
  )
}
