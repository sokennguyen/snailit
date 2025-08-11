import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Chính sách bảo mật</h1>
        <p className="text-sm text-gray-500 mb-6">Cập nhật: {new Date().toLocaleDateString('vi-VN')}</p>

        <p className="mb-4">
          Cảm ơn bạn đã sử dụng Ốc Tìm Nhà (SnailNest). Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết
          bảo vệ thông tin cá nhân của bạn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ
          dữ liệu của bạn.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">1. Thông tin chúng tôi thu thập</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Thông tin liên hệ (ví dụ: email) khi bạn đăng ký nhận tin.</li>
          <li>Nội dung bạn tạo (ví dụ: bài đăng, bình luận, hình ảnh) nếu tính năng này được bật.</li>
          <li>Dữ liệu kỹ thuật cơ bản (ví dụ: loại thiết bị, trình duyệt, dữ liệu sử dụng ẩn danh).</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">2. Cách chúng tôi sử dụng thông tin</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cung cấp và cải thiện trải nghiệm ứng dụng.</li>
          <li>Gửi thông báo hoặc cập nhật (khi bạn đồng ý).</li>
          <li>Bảo mật và ngăn chặn lạm dụng, gian lận.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">3. Chia sẻ dữ liệu</h2>
        <p className="mb-4">
          Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ dữ liệu với bên thứ ba tin cậy
          khi cần thiết để vận hành dịch vụ (ví dụ: nhà cung cấp cơ sở hạ tầng) và tuân thủ pháp luật.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">4. Lưu trữ và bảo mật</h2>
        <p className="mb-4">
          Chúng tôi áp dụng các biện pháp hợp lý để bảo vệ dữ liệu. Tuy nhiên, không có phương thức truyền tải
          hoặc lưu trữ nào an toàn tuyệt đối. Hãy sử dụng các mật khẩu mạnh và giữ bí mật thông tin đăng nhập của bạn.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">5. Quyền của bạn</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Yêu cầu truy cập, cập nhật hoặc xóa thông tin cá nhân (khi khả dụng).</li>
          <li>Hủy nhận thông báo qua email bất kỳ lúc nào.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">6. Trẻ em</h2>
        <p className="mb-4">
          Ứng dụng hướng đến gia đình. Nếu phát hiện thông tin từ trẻ em được thu thập mà không có sự đồng ý
          phù hợp, chúng tôi sẽ xóa theo yêu cầu hợp lệ.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">7. Thay đổi chính sách</h2>
        <p className="mb-6">
          Chúng tôi có thể cập nhật chính sách theo thời gian. Phiên bản mới nhất sẽ được đăng tải tại trang này.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">8. Liên hệ</h2>
        <p className="mb-6">Nếu bạn có câu hỏi, vui lòng liên hệ với chúng tôi.</p>

        <div className="mt-8">
          <Link
            to="/showcase"
            className="inline-flex items-center px-4 py-2 rounded-lg !bg-[#1f2a44] text-white hover:!bg-[#192238] transition-colors focus:outline-none focus:ring-0 ring-0 outline-none"
          >
            Quay lại
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
