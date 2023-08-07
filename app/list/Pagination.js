'use client'

export default function Pagination({ postsPerPage, totalPosts, paginate }){

  // 페이지 번호를 저장할 빈 배열을 선언
  const pageNumbers = [];

  // 총 페이지 수를 계산하고, 각 페이지 번호를 pageNumbers 배열에 추가
  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number)=>(
          <li key={number} className="page-item">
             {/* 각 페이지 번호를 클릭하면 해당 페이지의 게시글을 보여주도록 paginate 함수를 실행 */}
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
