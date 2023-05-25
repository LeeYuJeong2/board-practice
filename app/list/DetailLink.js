'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
    let router=useRouter()
    let url=usePathname()
    let a = useSearchParams()
    console.log('aaa',a)
    return (
        <button onClick={()=>{
            router.prefetch('/list')
        }}>버튼</button>
    )   
}