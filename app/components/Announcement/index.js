import React from 'react';
import AnnouncementStyle from './AnnouncementStyle';

const Announcement = () => (
  <AnnouncementStyle id="announcement" className="faq">
    <div className="container">
      <div className="section-title">
        <h2>Thông báo</h2>
      </div>
      <div className="accordion-list">
        <ul>
          <li className="text-justify">
            Chào mừng bạn đến với ứng dụng Định giá tài sản đảm bảo của ngân
            hàng Vpbank Định giá tài sản đảm bảo là ứng dụng ngân hàng di động
            đáp ứng nhu cầu định giá tài sản đảm bảo(Nhà xe và các tài sản giá
            trị khác). Được phát triển trên mục tiêu đáp ứng yêu cầu cho cán bộ
            định giá tài sản bất kỳ lúc nào, ở bất kỳ nơi đâu với chiếc smart
            phone của mình. Phát triển trên tiêu chí an toàn, thân thiện và
            thông minh, Định giá tài sản đảm bảo có nhiều tính năng vượt trội:
            <br />- Thống kê hồ sơ định giá theo từng trạng thái.
            <br />- Thực hiện định giá tài sản ở bất kỳ lúc nào, ở bất cứ đâu.
            <br />- Hoàn thiện hồ sơ định giá chỉ trong vòng vài phút.
          </li>
        </ul>
      </div>
    </div>
  </AnnouncementStyle>
);

export default Announcement;
