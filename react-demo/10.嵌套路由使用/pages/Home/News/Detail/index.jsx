import {useParams} from 'react-router-dom';

export default function Detail(){
  const contents=[
    {id:'1',content:"内容一"},
    {id:'2',content:"内容二"},
    {id:'3',content:"内容三"},
    {id:'4',content:"内容四"},
    {id:'5',content:"内容五"}
  ]
  const {id, title} = useParams();
  const resObj = contents.find((consObj)=>{
    return consObj.id === id;
  })
  return (
    <div className='news-list'>
      <ul>
        <li>
          <span>ID：</span>
          <span>{id}</span>
        </li>
        <li>
          <span>标题:</span>
          <span>{title}</span>
        </li>
        <li>
          <span>内容：</span>
          <span>
            {resObj.content}
          </span>
        </li>
      </ul>
    </div>
  )
}
