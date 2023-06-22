import React, { useState } from 'react';
import { auth } from '../firebase/firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Item1 } from '../pages/Item1.jsx';
import { Item2 } from '../pages/Item2.jsx';
import { Item3 } from '../pages/Item3.jsx';
import { Item4 } from '../pages/Item4.jsx';

const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const singIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/admin');
      // ...
    })
    .catch((error) => {
      console.log('error');
      alert("Password or email wrong!!!");
    });
  }

  if (user) {
    return (
      <>
        <div className='flex items-center justify-between w-full h-[80px] p-[0_40px] border-b-[2px]'>
          <h1>Database GEX</h1>
          <button onClick={() => auth.signOut()} className='underline'>Chiqish</button>
        </div>
        <div className='flex items-start w-full h-[calc(100vh_-_80px)] p-[10px]'>
          <div className='w-full flex items-start gap-[20px]'>
            <div className='border-[2px] p-[20px] w-[300px] h-[calc(100vh_-_100px)] rounded-[8px]'>
              <div className='flex flex-col items-start gap-[10px]'>
                  <div className={toggleState === 1 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(1)}>Farmatsevtika</div>
                  <div className={toggleState === 2 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(2)}>Bemorlar parvarishi</div>
                  <div className={toggleState === 3 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(3)}>Tish texnigi (Stomatologiya)</div>
                  <div className={toggleState === 4 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(4)}>Buxgalteriya hisobi</div>
                  <div className={toggleState === 5 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(5)}>Kompyuter savodxonligi</div>
                  <div className={toggleState === 6 ? 'w-full text-[16px] text-[#70C174] font-[500] leading-[26px] p-[6px_0px] border-b-[2px] border-[#70C174] cursor-pointer' : 'w-full text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_0px] cursor-pointer border-b-[2px] border-[#e5e5e5]'} onClick={() => toggleTab(6)}>Rus tili kursi</div>
              </div>
            </div>
            <div className='w-full h-auto border-[2px] rounded-[8px] p-[20px]'>
              <div className='flex items-start w-full h-[40px] border-b-[2px]'>
                <div className='w-[40px] h-[40px] flex items-center justify-center border-r-[2px] font-[600]'>T/r</div>
                <div className='w-[180px] h-[40px] flex items-center justify-center border-r-[2px] font-[600]'>Familiya</div>
                <div className='w-[180px] h-[40px] flex items-center justify-center border-r-[2px] font-[600]'>Ism</div>
                <div className='w-[180px] h-[40px] flex items-center justify-center font-[600]'>Otasining ismi</div>
              </div>
              <div className='mt-[5px] w-full border-t-[2px]'>
                <div className={toggleState === 1 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item1 />
                </div>
                <div className={toggleState === 2 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item2 />
                </div>
                <div className={toggleState === 3 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item3 />
                </div>
                <div className={toggleState === 4 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item4 />
                </div>
                <div className={toggleState === 5 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item4 />
                </div>
                <div className={toggleState === 6 ? 'flex flex-col items-start' : 'hidden flex-col items-start'}>
                  <Item4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }else {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-8 text-center flex items-center flex-col gap-[20px]'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign Up</h1>
              <form onSubmit={singIn} className="w-[300px] flex flex-col space-y-4 md:space-y-2">
                  <input type="email"  placeholder="Enter email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      onChange={(e) => setEmail(e.target.value)} required/>
                  <input type="password" placeholder="Enter password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      onChange={(e) => setPassword(e.target.value)} required/>
                  <button type="submit" className='w-full text-white bg-zinc-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login in</button>
              </form>
          </div>
        </div>
      </div>
    )
  }

  
}

export default Admin