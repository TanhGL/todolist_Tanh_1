import React, { useEffect } from "react";
// import {Thanhdautrang} from './Thanhdautrang'
import Header from './Header';

import './App.css';
import {About} from './About';


import { v4 as uuid } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
import Alert from "./Alert";
import { useGlobalContext } from "./context";
import Colors from "./Colors";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App = () => {
  const {
        inputRef,
    tasks,
    setTasks,
    alert,
      showAlert, isEditing,
    setIsEditing,
    editId,
    setEditId,
    name,
    setName,
    filter,
    setFilter,
    isColorsOpen,
    setIsColorsOpen,
  }             = useGlobalContext();

  const addTask = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Vui lòng nhập tên công việc !");
  } else if (name && isEditing) {
          setTasks(
        tasks.map((task) => {
          return task.id === editId ? { ...task, name: name } : task;
        })
      );
      setIsEditing(false);
          setEditId(null);
               setName("");
      showAlert(true, "Đã chỉnh sửa công việc.");
    } else {
      const newTask = {
        id: uuid().slice(0, 8),
        name: name,
        completed: false,
        color: "#009688",
      };
      setTasks([...tasks, newTask]);
      showAlert(true, "Thêm thành công công việc.");
      setName("");
    }
  };

  const filterTasks = (e) => {
    setFilter(e.target.dataset["filter"]);
  };
    // xóa all cv
  const deleteAll = () => {
    setTasks([]);
    showAlert(true, "Công việc được dọn dẹp!");
  };

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [inputRef, tasks]);

  const handleDragEnd = (param) => {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    if (desI) {
      const reOrdered = [...tasks];
      reOrdered.splice(desI, 0, reOrdered.splice(srcI, 1)[0]);
      setTasks(reOrdered);
    }
  };

  const hideColorsContainer = (e) => {
     //màu nút 
    if (e.target.classList.contains("btn-colors")) return;
    setIsColorsOpen(false);
  };

  return (
  <>
      {/* <Thanhdautrang></Thanhdautrang>
      <Routes>
        <Route path ='/' element={<App/>} />
        <Route  path='about' element={<About />} />
      </Routes> */}


    <Router>
        <Header title=""/> 
        <Routes>
       
      
        <Route exact path={"/about"} element={<About />} />
        </Routes>

     
    </Router> 






    {/* <div id="menu"> 
          <ul>
            <li><a href="#"> <button><strong>Trang chủ</strong></button> </a></li>
            <li><a href="#"><button><strong>Giới thiệu</strong></button></a></li>
            <li><a href="#"><button><strong>Công việc</strong></button></a></li>
          </ul>  
    </div> */}
  
    <div className='container' onClick={hideColorsContainer}>
      {isColorsOpen && <Colors />}
      {alert && <Alert msg={alert.msg} />}
      <form className='head' onSubmit={addTask}>
        <input
          type='text'
          ref={inputRef}
          placeholder='Công việc mới (Thêm dấu cách)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
      



        <button  class="maunut"type='submit'>{isEditing ? "Chỉnh sửa" : "Thêm"}</button>
      </form>
      <div className='filter'>
        <button
          data-filter='all'
          className={filter === "all" ? "active" : ""}
          onClick={filterTasks}
        >
          Tất cả
        </button>
        <button
          data-filter='completed'
          className={filter === "completed" ? "active" : ""}
          onClick={filterTasks}
        >
         Đã hoàn thành công việc
        </button>
        <button
          data-filter='uncompleted'
          className={filter === "uncompleted" ? "active" : ""}
          onClick={filterTasks}
        >
          Chưa hoàn thành
        </button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {tasks.length > 0 ? (
          <List />
        ) : (
          <p className='no-tasks'>Công việc được dọn dẹp!</p>
        )}
      </DragDropContext>
      {tasks.length > 2 && (
        <button
          className='btn-delete-all'
          onClick={deleteAll}
          title='Delete All Tasks (Completed and Uncompleted)!'
        >
        Xóa tất cả công việc
        </button>
      )}
	
	  
    </div>
	
	</>
  );
};



export default App;