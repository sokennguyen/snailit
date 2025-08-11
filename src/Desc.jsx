import logoIntro from './assets/logo-intro.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Desc() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState(1);

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <div className='flex flex-col items-center justify-center text-white space-y-8'>
            <div className='p-2 text-center one text-2xl max-w-md font-be-vietnam'>
              Gia đình là nơi để ta mở lòng và bộc lộ cảm xúc. Nhưng có những câu chuyện khó được chia sẻ khi đối mặt với nhau, hoặc quý giá mà ta không muốn lãng quên.
            </div>
            <button
              className="btn !bg-white !text-black !border-gray-300 btn-lg rounded-xl shadow-lg gap-2 flex items-center transform active:scale-95 transition-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
              onClick={() => setCurrentScreen(2)}
            >
              Tiếp theo
              <span className="!text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        );
      case 2:
        return (
          <div className='flex flex-col items-center justify-center text-white space-y-8'>
            <div className='p-2 text-center two text-2xl max-w-md font-be-vietnam'>
                <span className='font-bold text-customRed'>Ốc Tìm Nhà</span> là những lá thư để ba mẹ cùng con truyền đạt tâm tư và lưu giữ những kỷ niệm quý giá ấy.
            </div>
            <div className='flex gap-4'>
              <button
                className="btn !bg-gray-600 !text-white !border-gray-500 btn-lg rounded-xl shadow-lg gap-2 flex items-center transform active:scale-95 transition-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                onClick={() => setCurrentScreen(1)}
              >
                <span className="!text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                </span>
                Quay lại
              </button>
              <button
                className="btn !bg-white !text-black !border-gray-300 btn-lg rounded-xl shadow-lg gap-2 flex items-center transform active:scale-95 transition-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                onClick={() => setCurrentScreen(3)}
              >
                Tiếp theo
                <span className="!text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='flex flex-col items-center justify-center text-white space-y-8'>
            <div className='p-2 text-center three text-2xl max-w-md font-be-vietnam'>Hãy chia sẻ trên <span className='font-bold text-customRed'>Ốc Tìm Nhà</span> để gắn bó gia đình thay cho những khoảng lặng không muốn</div>
            <div className='flex gap-4'>
              <button
                className="btn !bg-gray-600 !text-white !border-gray-500 btn-lg rounded-xl shadow-lg gap-2 flex items-center transform active:scale-95 transition-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                onClick={() => setCurrentScreen(2)}
              >
                <span className="!text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                </span>
                Quay lại
              </button>
              <button
                className="btn !bg-white !text-black !border-gray-300 btn-lg rounded-xl shadow-lg gap-2 flex items-center transform active:scale-95 transition-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                onClick={() => navigate('/showcase')}
              >
                Trải Nghiệm
                <span className="!text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-blue-900 h-screen w-screen'>
      <div className='flex flex-col sm:hidden font-light text-xl items-center text-white space-y-4'>
        {renderScreen()}
      </div>
    </div>
  );
}

export default Desc; 