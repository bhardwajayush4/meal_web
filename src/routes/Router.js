import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Meal from "../pages/Meal"
import About from '../pages/About'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetail from '../pages/FoodDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'  
import Allfoods from '../pages/Allfoods'
import Cart from '../pages/Cart'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to='/home'/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/meal' element = {<Meal/>}/>
        <Route path='/food' element = {<Allfoods/>}/>
        <Route path='/food/:id' element = {<FoodDetail/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/checkout' element = {<Checkout/>}/>
        <Route path='/cart' element = {<Cart/>}/>
    </Routes>
  )
}

export default Router