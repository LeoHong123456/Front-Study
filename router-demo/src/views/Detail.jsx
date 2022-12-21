import React from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'

export default function Detail() {

  //**********方式一编程式路由传参接收方式***************/
  //获取路由传递过来的参数
  //const  [searchParams, setSearchParams] =  useSearchParams();
  //获取传递过来的id
  //const id = searchParams.get("id")
  //是否包含id
  //const hasId = searchParams.has("id");
  //console.log(`路由传递过来的ID=${id}`)


  //**********方式二动态路由传参接收方式***************/
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(`动态路由传递过来的参数id=${id}`)

  return (
    <div>
      detail....
      <div className="like-prodcut">
        {/* 方式一编程式路由获取参数跳转 */}
        {/* <button onClick={() => setSearchParams({ "id": 6166 })}>猜你喜欢</button> */}

        {/* 方式二动态路由获取参数跳转 */}
        <button onClick={() => { navigate(`/detail/6116`) }}>猜你喜欢</button>
      </div>
    </div>
  )
}
