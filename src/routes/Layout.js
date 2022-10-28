import React from 'react'
import {Link, Outlet} from 'react-router-dom'


  const Layout = () => {
  return (
    <>
        <header className='it'>
           <p> <Link to='/'>Home</Link></p>
           <p> <Link to='/blog'>Blog</Link></p>
           <p> <Link to='/about'>About</Link></p>
        </header>
        <main className='container'>
            <Outlet/>
        </main>
        
        <footer className='container'>
            2022
        </footer>
    </>

  )
}
export {Layout}