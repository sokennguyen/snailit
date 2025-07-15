import { useState } from 'react';
import firstImage from './assets/first-post.png';
import secondImage from './assets/second-post.png';
import logoApp from './assets/logo-app.svg';
import './App.css';

const postContent1 = `Hôm nay là một ngày thật đặc biệt với gia đình mình. Con đã tự tin bước những bước đầu tiên, nở nụ cười rạng rỡ khi nhìn thấy ba mẹ cổ vũ. Khoảnh khắc ấy, ba mẹ cảm nhận được niềm hạnh phúc giản dị nhưng vô cùng quý giá.

Mỗi ngày trôi qua, con lớn lên từng chút một, và ba mẹ luôn muốn lưu giữ lại những kỉ niệm đẹp đẽ này để sau này cùng nhau ôn lại. Cảm ơn con đã mang đến cho ba mẹ thật nhiều niềm vui và yêu thương.

Tối nay, cả nhà cùng nhau ngồi bên mâm cơm, nghe con kể về những điều mới lạ mà con khám phá được trong ngày. Ba mẹ nhìn nhau, mỉm cười hạnh phúc vì thấy con ngày càng trưởng thành, tự tin và biết quan tâm đến mọi người xung quanh.

Những buổi chiều cuối tuần, ba mẹ đưa con ra công viên, cùng nhau chơi đùa, chạy nhảy và chụp thật nhiều ảnh để lưu giữ lại từng khoảnh khắc. Mỗi bức ảnh là một câu chuyện, một kỉ niệm không thể nào quên trong hành trình lớn lên của con và hành trình làm cha mẹ của ba mẹ.`;

const postContent2 = `Ngày đầu tiên con đi học, ba mẹ vừa hồi hộp vừa tự hào. Con rụt rè nắm tay mẹ bước vào lớp, ánh mắt ngơ ngác nhìn bạn bè và cô giáo mới. Khi tan học, con chạy ùa ra khoe với ba mẹ về những điều thú vị đã học được.

Dù chỉ là những điều nhỏ bé, nhưng với ba mẹ, đó là những bước ngoặt lớn trên hành trình trưởng thành của con. Ba mẹ mong con luôn mạnh mẽ, tự tin và hạnh phúc trên con đường phía trước.

Có những hôm con về nhà với đôi mắt long lanh, kể về người bạn mới, về bài hát con vừa học, hay về bức tranh con tự vẽ tặng ba mẹ. Mỗi câu chuyện của con đều làm cho ngôi nhà nhỏ của mình thêm ấm áp và tràn ngập tiếng cười.

Ba mẹ luôn tin rằng, dù con có lớn lên và đi xa đến đâu, những kỉ niệm tuổi thơ này sẽ mãi là hành trang quý giá, giúp con vững bước trên đường đời.`;

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
          <img src={image} alt='description' className='w-full h-full mb-2' />
        </div>
        <div className='pt-2'>{renderPreviewAndRest(preview, rest, open)}</div>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[600px]' : 'max-h-0'}`}
          aria-expanded={open}
          id={`show-hide-collapse-heading-${title}`}
          style={{ marginTop: open ? 0 : undefined }}
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

  return (
    <div className='flex flex-col items-center justify-start bg-blue-900 h-screen w-screen space-y-4 p-3 overflow-auto'>
      <header className='flex flex-row items-center justify-between w-full max-w-md px-2 py-3 text-white'>
        <img src={logoApp} alt='App Logo' className='h-10 w-10' />
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </span>
      </header>
      <div className='text-white font-bold text-4xl'>Bài Đăng</div>
      <div id='post-container' className='!text-black flex flex-col w-full items-center gap-6'>
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
  );
}

export default Showcase; 