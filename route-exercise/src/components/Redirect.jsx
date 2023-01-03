import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Redirect(props) {
  const navigate = useNavigate();
  const {to} = props;
  useEffect(()=>{
    navigate(to, {replace : true})
  },[])
}
