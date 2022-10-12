


import React from 'react'

// const current = new Date();
// const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
//NGAY GIO XUAT


//ngay va gio
// const currentDate=new Date().toLocaleDateString(); //ngay 
// const currentTime=new Date().toLocaleTimeString();  //gio

export const About = () => {
  return (
    <div className='container'>
     
        <h1><u>GIỚI THIỆU BẢN THÂN</u></h1> 

        <br></br>
        <h2><strong><i>Họ và tên: Phan Ngọc Tánh</i></strong></h2>
        <h2>Email: 4601104163@student.hcmue.edu.vn 
        <br></br>
         MSSV: 46.01.104.163 </h2>
        <h3>Bài tập Todolist App</h3>

        {/* <p>Ngay:{currentDate}</p>
      <p>Current time is:{currentTime}</p> */}
    </div>
  )
}

export default About
