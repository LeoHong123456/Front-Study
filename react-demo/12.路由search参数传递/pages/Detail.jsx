import React from 'react'
import { useSearchParams ,useLocation} from 'react-router-dom'

export default function Detail() {
  //setSearct用于更新search参数
  let [search, setSearch] = useSearchParams();
  let id = search.get("id");
  let title = search.get("title");
  let content = search.get("content");

  /* 获取参数方式二
   const {hash, key ,pathname, search ,state}  = useLocation();
  console.log(search) */
  return (
    <div>
      <p><span>ID:</span>{id}</p>
      <p><span>TITLE:</span>{title}</p>
      <p><span>CONTENT:</span>{content}</p>
      <p><button onClick={()=>setSearch('id=5&title=张三&content=修改的内容')}>更新参数</button></p>
    </div>
  )
}
