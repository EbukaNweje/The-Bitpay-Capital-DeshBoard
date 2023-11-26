import { HashRouter, Routes, Route } from 'react-router-dom'
// import HomeE from '../HomeE'
import Dashboard from '../Components/Dashboard/Dashboard'



const HomeRoute = () => {
  
  return (
    <>
    <HashRouter>

      <Routes>
            <Route index path="/" element={<Dashboard/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default HomeRoute