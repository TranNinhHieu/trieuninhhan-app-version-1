import React from 'react'
import {Container} from 'react-bootstrap'
import  './Header.scss'
function Header() {
  return (
   <div className="header-container"> 
     <div className="logo">
       <img src="https://pbs.twimg.com/media/FKzh177aUAIt-kq?format=jpg&name=medium" alt="#"/>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Nhập từ khóa"/>
      </div>
      <div>
        <button>Lịch sử</button>
        <button>Theo dõi</button>
      </div>
      <div className="button-sign-up-in">
        <button className="btn-sign-up">Đăng ký</button>
        <button className="btn-sign-in">Đăng Nhập</button>
      </div>
   </div>
   
  )
}


export default Header