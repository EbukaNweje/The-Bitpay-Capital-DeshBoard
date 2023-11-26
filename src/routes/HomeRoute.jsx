import {  Routes, Route } from 'react-router-dom'
// import HomeE from '../HomeE'
// import Dashboard from '../Components/Dashboard/Dashboard'
import HomeE from '../HomeE'

const HomeRoute = () => {
  
  return (
    <>
      <Routes>
            <Route index path="/"  element={<HomeE/>} />
        </Routes>
    </>
  )
}

export default HomeRoute