import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import firstImage from './assets/first-post.webp';
import secondImage from './assets/second-post.webp';
import logoApp from './assets/logo-app.svg';
import dadAvatar from './assets/dad-avatar.svg';
import './App.css';

const postContent1 = `Hôm nay là một ngày thật đặc biệt với gia đình mình. Con đã tự tin bước những bước đầu tiên, nở nụ cười rạng rỡ khi nhìn thấy ba mẹ cổ vũ. Khoảnh khắc ấy, ba mẹ cảm nhận được niềm hạnh phúc giản dị nhưng vô cùng quý giá.

Mỗi ngày trôi qua, con lớn lên từng chút một, và ba mẹ luôn muốn lưu giữ lại những kỉ niệm đẹp đẽ này để sau này cùng nhau ôn lại. Cảm ơn con đã mang đến cho ba mẹ thật nhiều niềm vui và yêu thương.

Tối nay, cả nhà cùng nhau ngồi bên mâm cơm, nghe con kể về những điều mới lạ mà con khám phá được trong ngày. Ba mẹ nhìn nhau, mỉm cười hạnh phúc vì thấy con ngày càng trưởng thành, tự tin và biết quan tâm đến mọi người xung quanh.

Những buổi chiều cuối tuần, ba mẹ đưa con ra công viên, cùng nhau chơi đùa, chạy nhảy và chụp thật nhiều ảnh để lưu giữ lại từng khoảnh khắc. Mỗi bức ảnh là một câu chuyện, một kỉ niệm không thể nào quên trong hành trình lớn lên của con và hành trình làm cha mẹ của ba mẹ.`;

const postContent2 = `Ngày đầu tiên con đi học, ba mẹ vừa hồi hộp vừa tự hào. Con rụt rè nắm tay mẹ bước vào lớp, ánh mắt ngơ ngác nhìn bạn bè và cô giáo mới. Khi tan học, con chạy ùa ra khoe với ba mẹ về những điều thú vị đã học được.

Dù chỉ là những điều nhỏ bé, nhưng với ba mẹ, đó là những bước ngoặt lớn trên hành trình trưởng thành của con. Ba mẹ mong con luôn mạnh mẽ, tự tin và hạnh phúc trên con đường phía trước.

Có những hôm con về nhà với đôi mắt long lanh, kể về người bạn mới, về bài hát con vừa học, hay về bức tranh con tự vẽ tặng ba mẹ. Mỗi câu chuyện của con đều làm cho ngôi nhà nhỏ của mình thêm ấm áp và tràn ngập tiếng cười.

Ba mẹ luôn tin rằng, dù con có lớn lên và đi xa đến đâu, những kỉ niệm tuổi thơ này sẽ mãi là hành trang quý giá, giúp con vững bước trên đường đời.`;

const AVATAR_URL = dadAvatar;
const USERNAME = 'Nguyễn Văn A';
const USERTYPE = 'Bố';

function Post({ title, date, image, content, open, setOpen }) {
  function getPreviewAndRest(text, maxLen = 200) {
    if (text.length <= maxLen) return [text, ''];
    let cut = text.lastIndexOf(' ', maxLen);
    if (cut === -1) cut = maxLen;
    return [text.slice(0, cut), text.slice(cut)];
  }
  const [preview, rest] = getPreviewAndRest(content, 200);
  const renderParagraphs = text =>
    text.split(/\n\n/).map((para, idx) => (
      <p key={idx} className="mb-2 last:mb-0">{para}</p>
    ));
  function renderPreviewAndRest(preview, rest, open) {
    if (preview.endsWith('\n\n') || preview.trimEnd().endsWith('\n\n')) {
      return <>{renderParagraphs(preview)}{!open && '...'}</>;
    }
    const restParts = rest.split(/\n\n/);
    if (open && restParts.length > 0) {
      return <>
        {renderParagraphs(preview + restParts[0])}
        {restParts.slice(1).map((para, idx) => <p key={idx + 1000} className="mb-2 last:mb-0">{para}</p>)}
      </>;
    }
    const trimmedPreview = preview.replace(/[\s\n]+$/, '');
    return <>{renderParagraphs(trimmedPreview + (!open ? '...' : ''))}</>;
  }
  return (
    <div className='w-full max-w-md'>
      <div className='bg-white border border-gray-200 rounded-3xl shadow-md p-4'>
        <div className='font-medium text-2xl mb-2 flex flex-col gap-2'>
          {title}
          <div className='text-xs text-gray-500'>{date}</div>
          <img
            src={image}
            alt={title}
            className='w-full h-auto mb-2'
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
        <div
          className='pt-2 cursor-pointer'
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-controls={`show-hide-collapse-heading-${title}`}
          onClick={() => setOpen(v => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(v => !v);
            }
          }}
        >
          {renderPreviewAndRest(preview, rest, open)}
        </div>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[600px]' : 'max-h-0'} cursor-pointer`}
          aria-expanded={open}
          id={`show-hide-collapse-heading-${title}`}
          style={{ marginTop: open ? 0 : undefined }}
          role="button"
          tabIndex={0}
          onClick={() => setOpen(v => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(v => !v);
            }
          }}
        >
          {open && !preview.endsWith('\n\n') && rest.split(/\n\n/).length > 1
            ? rest.split(/\n\n/).slice(1).map((para, idx) => <p key={idx + 2000} className="mb-2 last:mb-0">{para}</p>)
            : null}
        </div>
        <a
          href={`#show-hide-collapse-heading-${title}`}
          className="collapse-toggle link link-primary inline-flex items-center mt-2 cursor-pointer underline"
          aria-expanded={open}
          aria-controls={`show-hide-collapse-heading-${title}`}
          onClick={e => { e.preventDefault(); setOpen(v => !v); }}
        >
          <span className={open ? 'hidden' : ''}>Đọc thêm</span>
          <span className={open ? '' : 'hidden'}>Rút gọn</span>
          <span className="ml-1">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            )}
          </span>
        </a>
      </div>
    </div>
  );
}

function Showcase() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  // Email form state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Compose modal state
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState('');
  const canPost = composeText.trim().length > 0;

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      // Use toast for invalid email notification
      setEmailError('');
      toast.error('Email không hợp lệ');
      return;
    }
    
    setEmailError('');
    
    // Create form data for Netlify submission
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('email', email);
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      toast.success('Đăng ký thành công!');
      setEmail('');
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('Có lỗi xảy ra. Vui lòng thử lại.');
    });
  }

  return (
    <>
      {/* Overlay and Sidebar Container */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-white/80"
          onClick={() => setSidebarOpen(false)}
        />
        {/* Sidebar */}
        <aside
          className={`fixed top-0 right-0 h-full w-48 bg-white shadow-2xl z-50 flex flex-col items-center pt-10 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center w-full gap-2">
            <img src={AVATAR_URL} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-blue-200 shadow mb-3" width={96} height={96} loading="lazy" decoding="async" fetchPriority="low" />
            <div className="font-semibold text-lg text-gray-800 mb-1">{USERNAME}</div>
            <span className="px-3 py-1 text-xs rounded-full bg-green-200 text-green-700 font-semibold mb-3">{USERTYPE}</span>
            <button 
              onClick={() => {
                toast('Tính năng chưa khả dụng', {
                  icon: '🚧',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                });
              }}
              className="w-40 h-10 bg-gray-700 text-black rounded-lg shadow hover:bg-gray-600 font-medium transition-colors transform active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none"
            >
              Tài khoản
            </button>
            <button 
              onClick={() => {
                toast('Tính năng chưa khả dụng', {
                  icon: '🚧',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                });
              }}
              className="w-40 h-10 bg-gray-700 text-black rounded-lg shadow hover:bg-gray-600 font-medium transition-colors transform active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none"
            >
              Đăng xuất
            </button>
          </div>
        </aside>
      </div>
      {/* Create Post Modal */}
      {composeOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-white/80" onClick={() => setComposeOpen(false)} />
          <div className="relative w-full max-w-md bg-white mx-1 rounded-2xl shadow-2xl z-[61] flex flex-col h-[70vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="text-lg font-semibold">Tạo bài viết</div>
              <button
                aria-label="Close"
                className="w-8 h-8 min-w-[2rem] min-h-[2rem] inline-flex shrink-0 items-center justify-center !rounded-full bg-gray-200 hover:bg-gray-300 p-0 transform active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none"
                onClick={() => setComposeOpen(false)}
              >
                <span className="sr-only">Close</span>
                <span className="text-black text-base leading-none" aria-hidden="true">x</span>
              </button>
            </div>
            {/* Author */}
            <div className="px-4 pt-4 flex items-center gap-3">
              <img src={AVATAR_URL} alt="Avatar" className="w-10 h-10 rounded-full" width={40} height={40} loading="lazy" decoding="async" fetchPriority="low" />
              <div className="flex flex-col">
                <div className="font-semibold text-gray-900">{USERNAME}</div>
                <div className="text-xs text-gray-500">{USERTYPE}</div>
              </div>
            </div>
            {/* Text area container */}
            <div className="px-4 pt-3 pb-4 flex-1">
              <div className="w-full h-full border border-gray-200 rounded-xl p-3">
                <textarea
                  value={composeText}
                  onChange={(e) => setComposeText(e.target.value)}
                  placeholder={`Bạn đang nghĩ gì, ${USERNAME}?`}
                  className="w-full h-full resize-none outline-none bg-transparent text-gray-800 placeholder-gray-400 overflow-auto"
                />
              </div>
            </div>
            {/* Footer */}
            <div className="px-4 pb-4">
              <div className="w-full flex items-center gap-3">
                {/* Image add icon: inline SVG as the button (colored with currentColor) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="button"
                  aria-label="Thêm ảnh"
                  tabIndex={0}
                  onClick={() => {
                    toast('Tính năng chưa khả dụng', {
                      icon: '🚧',
                      style: { borderRadius: '10px', background: '#333', color: '#fff' },
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toast('Tính năng chưa khả dụng', {
                        icon: '🚧',
                        style: { borderRadius: '10px', background: '#333', color: '#fff' },
                      });
                    }
                  }}
                  className="h-12 w-12 text-green-600 cursor-pointer select-none focus:outline-none focus:ring-0 ring-0 outline-none"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.51l-4.391-4.053a1.5 1.5 0 0 0-2.265.27l-3.13 4.695-2.303-1.48a1.5 1.5 0 0 0-1.96.298L3.005 18.15A12.98 12.98 0 0 1 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm9.477 8.53L21 16.437v1.357c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.305 2.305 0 0 1-.485-.345L8.2 15.067l2.346 1.508a1.5 1.5 0 0 0 2.059-.43l3.077-4.616zM7.988 6C6.878 6 6 6.832 6 7.988 6 9.145 6.879 10 7.988 10 9.121 10 10 9.145 10 7.988 10 6.832 9.121 6 7.988 6z" />
                </svg>
                <button
                  type="button"
                  onClick={() => {
                    if (!canPost) return;
                    toast('Tính năng chưa khả dụng', {
                      icon: '🚧',
                      style: { borderRadius: '10px', background: '#333', color: '#fff' },
                    });
                  }}
                  className={`flex-1 h-12 rounded-xl font-medium transition-colors transform active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none ${canPost ? '!bg-[#1f2a44] !text-white hover:!bg-[#192238] cursor-pointer shadow-md' : 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'}`}
                  disabled={!canPost}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col items-center justify-start bg-blue-900 w-screen space-y-4 p-3 overflow-auto min-h-screen'>
        <header className='flex flex-row items-center justify-between w-full max-w-md px-2 py-3 text-white'>
          <div className='flex flex-row items-center gap-2' >
            <img src={logoApp} alt='SnailNest logo' className='h-12 w-12' width={48} height={48} loading="eager" fetchPriority="high" decoding="async" />
            <div className='flex flex-col gap-1'>
              <div className='text-2xl font-bold'>Nhà của Tuấn và Lan</div>
              <div className='flex flex-row gap-2'>
                <div className='px-3 py-1 text-xs rounded-full bg-blue-200 text-blue-700 font-semibold'>Tuấn</div>
                <div className='px-3 py-1 text-xs rounded-full bg-pink-200 text-pink-700 font-semibold'>Lan</div>
                <div className='px-3 py-1 text-xs rounded-full bg-purple-200 text-purple-700 font-semibold'>Mẹ</div>
                <div className='px-3 py-1 text-xs rounded-full bg-green-200 text-green-700 font-semibold'>Bố</div>
              </div>
            </div>
          </div>
          <span>
            <div
              role="button"
              tabIndex="0"
              onClick={() => setSidebarOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSidebarOpen(true);
                }
              }}
              aria-label="Open sidebar"
              className="focus:outline-none cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
          </span>
        </header>
        {/* Composer-style card (no icon bar) */}
        <div className='w-full max-w-md'>
          <div className='bg-white border border-gray-200 rounded-3xl shadow-md p-4 flex items-center gap-3'>
            <img src={AVATAR_URL} alt='Avatar' className='w-10 h-10 rounded-full' width={40} height={40} loading="lazy" decoding="async" fetchPriority="low" />
            <div
              className='flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors'
              role='button'
              tabIndex={0}
              onClick={() => setComposeOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setComposeOpen(true);
                }
              }}
            >
              {`Bạn đang nghĩ gì, ${USERNAME}?`}
            </div>
          </div>
        </div>
        <div id='post-container' className='!text-black flex flex-col w-full items-center gap-6 mb-8'>
          <Post
            title='Khoảng khắc của con, kỉ niệm của ba mẹ'
            date='01/07/2025'
            image={firstImage}
            content={postContent1}
            open={open1}
            setOpen={setOpen1}
          />
          <Post
            title='Kỉ niệm ngày đầu tiên đi học'
            date='02/07/2025'
            image={secondImage}
            content={postContent2}
            open={open2}
            setOpen={setOpen2}
          />
        </div>
      </div>
      {/* CTA Section */}
      <div className='h-120 w-full max-w-md p-6 bg-customRed shadow-lg flex flex-col justify-center items-center text-center'>
        <div className='text-4xl font-bold mb-8 text-white'>Lưu giữ những câu chuyện, cùng nhau</div>
        <div className='w-80 text-base text-white mb-6'>Đừng để những nỗi lòng trôi vào quên lãng. Đăng ký để nhận được thông tin phát triển của Ốc Tìm Nhà</div>
        <form name="contact" data-netlify='true' data-netlify-honeypot="bot-field" method="POST" className='w-full flex justify-center' onSubmit={handleEmailSubmit} >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className='w-full max-w-xs flex flex-col'>
            <div className='flex items-center bg-black rounded-full px-1 py-1 w-full'>
              <input
                type='email'
                name='email'
                placeholder='emailcuaban@mail.com'
                className='bg-gray-100 text-gray-500 rounded-l-full px-4 py-2 w-full outline-none border-none placeholder-gray-500'
                style={{ fontFamily: 'inherit' }}
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError(''); }}
              />
              <div
                className='bg-black rounded-r-full px-6 py-2 flex items-center justify-center cursor-pointer transform active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none'
                tabIndex={0}
                role='button'
                aria-label='Gửi email'
                onClick={handleEmailSubmit}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { handleEmailSubmit(); } }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div style={{ minHeight: '40px' }}>
              {emailError ? (
                <div className="flex items-center gap-2 bg-red-100 text-red-700 rounded-md px-3 py-2 mt-2 w-full text-sm shadow">
                  <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 5a7 7 0 110 14a7 7 0 010-14z" />
                  </svg>
                  {emailError}
                </div>
              ) : (
                <div className="py-2 mt-2" />
              )}
            </div>
          </div>
        </form>
      </div>
      {/* Footer Section */}
      <footer className='w-full flex justify-center bg-blue-950'>
        <div className='w-full max-w-md px-4 py-6 text-white border-t border-white/10'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={logoApp} alt='SnailNest logo' className='h-6 w-6' width={24} height={24} loading="lazy" decoding="async" fetchPriority="low" />
              <span className='font-semibold'>SnailNest</span>
            </div>
            <nav className='flex items-center gap-4 text-sm'>
              <div className='flex flex-col items-center leading-tight'>
                <span className='font-medium'>Liên hệ</span>
                <span className='text-xs text-white/80 select-text'>kien@snailnest.com</span>
              </div>
              <Link to='/privacy' className='underline hover:text-yellow-200 transition'>Chính sách bảo mật</Link>
            </nav>
          </div>
          <div className='mt-3 text-center text-xs text-white/70'>
            &copy; {new Date().getFullYear()} SnailNest. All rights reserved.
          </div>
        </div>
      </footer>
      <Toaster position="top-center" />
    </>
  );
}

export default Showcase; 