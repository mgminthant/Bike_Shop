import {useLocation} from "react-router-dom";

const Order = () => {
  const { pathname} = useLocation()
  return (
    <h1 style={{fontSize:'20px',marginTop:'100px'}}>Your {pathname.split('/')[2]}</h1>
  )
}

export default Order