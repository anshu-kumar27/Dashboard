import { Route, Routes, useNavigate } from 'react-router-dom';
import HospitalData from './services/HospitalData';
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
    <div className='flex flex-row bg-base-200'>
      <HospitalData />

      {loading ? (
        <MainLoader />
      ) : (
        <>
          <div className="h-[100vh] md:block md:w-1/5"><SideBar /></div>
          <div className='md:w-4/5 p-2 flex-1 md:ml-6 mt-10 md:mt-0'>
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