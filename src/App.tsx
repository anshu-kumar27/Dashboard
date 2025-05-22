import { Route, Routes, useNavigate } from 'react-router-dom';
import HospitalData from './services/HospitalData'; // 👈 import here
import Dashboard from './pages/Dashboard';
import Redirection from './pages/Redirection';
import MainLoader from './components/MainLoader';
import { useHospitalContext } from './context/HospitalContext';
import SideBar from './components/SideBar';
import { useEffect } from 'react';

function App() {
  const { loading } = useHospitalContext();
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/dashboard')
  },[])
  return (
    <div className='flex flex-1 flex-row bg-base-200'>
      <HospitalData />

      {loading ? (
        <MainLoader />
      ) : (
        <>
          <div className="h-[100vh] flex-1 w-1/6"><SideBar /></div>
          <div className='md:w-5/6 w-[100%]'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/*' element={<Redirection />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;