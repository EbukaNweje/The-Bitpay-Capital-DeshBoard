import { Routes, Route } from 'react-router-dom'
// import HomeE from '../HomeE'
import Dashboard from '../Components/Dashboard/Dashboard'



const HomeRoute = () => {
  
  return (
    <>
      <Routes>
            <Route index path="/" element={<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default HomeRoute