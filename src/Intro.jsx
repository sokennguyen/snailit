import logoIntro from './assets/logo-intro.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center bg-blue-900 h-screen w-screen'>
      <div className='hidden sm:flex flex-col items-center justify-center text-white'>
        <img
          src={logoIntro}
          alt="SnailNest logo"
          className="w-56 h-56 mb-8"
          width={224}
          height={224}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className='font-bold text-4xl text-center'>
          Chưa ra mắt trên desktop,
          Hãy sử dụng điện thoại để trải nghiệm nhé!
        </div>
      </div>
      <div className='flex flex-col sm:hidden font-light text-xl items-center text-white space-y-4'>
        <img
          src={logoIntro}
          alt="SnailNest logo"
          className="w-56 h-56 "
          width={224}
          height={224}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className='p-2 text-center font-be-vietnam'>
          Ốc Tìm Nhà là nơi để gia đình chia sẻ những câu chuyện quý giá cùng nhau
        </div>
        <button
          className="btn !bg-white !text-black !border-gray-300 btn-lg rounded-xl shadow-lg gap-2 flex items-center"
          onClick={() => navigate('/desc')}
        >
          Bắt Đầu
          <span className="!text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Intro; 