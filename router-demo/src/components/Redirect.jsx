import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Redirect(props) {
  const {to} = props;
  const navigate = useNavigate();
  useEffect(()=>{
    navigate(to, {replace:true})
  })
}
