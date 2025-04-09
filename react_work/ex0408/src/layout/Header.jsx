import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  const mypageLink = ()=>{
    navigate('/mypage');
  }

  return (
    <div className='header'>
        <h2><Link to="/">홈</Link></h2>
        <h2><Link to="/lotto">로또</Link></h2>
        <h2><button onClick={mypageLink}>마이페이지</button></h2>
    </div>
  )
}

export default Header