import { useState } from 'react'
import './App.css'
import logoIntro from './assets/logo-intro.svg';

function App() {

  return (
    <div className='flex flex-col items-center justify-center bg-blue-900 h-screen w-screen'>
      <div className='hidden sm:flex font-bold text-4xl justify-center text-white'>
        Haven't developed yet for desktop,
        works best on mobile
      </div>
      <div className='flex flex-col sm:hidden font-light text-xl items-center text-white space-y-4'>
        <img src={logoIntro} alt="Intro Logo" className="w-56 h-56 " />
        <div className='p-2 text-center'>
          Ốc Tìm Nhà là nơi để gia đình chia sẻ những câu chuyện quý giá cùng nhau
        </div>
        <button className="btn btn-white btn-lg rounded-xl shadow-lg gap-2 flex items-center text-black">
          Trải Nghiệm
          <span className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default App
