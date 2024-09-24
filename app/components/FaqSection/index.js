import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import FaqStyle from './FaqStyle';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index, event) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqStyle id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Câu hỏi thường gặp</h2>
        </div>

        <div className="accordion-list" id="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help" />
              <a
                href="#faq-list-1"
                onClick={e => toggleCollapse(1, e)}
                className={openIndex === 1 ? 'collapsed' : ''}
              >
                Tài khoản bị khóa. Tôi cần làm gì để mở khóa lại tài khoản
                <i
                  className={`bx bx-chevron-${
                    openIndex === 1 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
                <div style={{ marginLeft: '32px' }}>
                  <p>
                    Trả lời: Liên hệ admin hệ thống, dunglv6@vpbank.com.vn,
                    minhhb@vpbank.com.vn.
                  </p>
                </div>
              </Collapse>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help" />
              <a
                href="#faq-list-2"
                onClick={e => toggleCollapse(2, e)}
                className={openIndex === 2 ? 'collapsed' : ''}
              >
                Tôi không nhớ mật khẩu. Làm thế nào để tôi lấy lại đổi mật khẩu?
                <i
                  className={`bx bx-chevron-${
                    openIndex === 2 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
                <div style={{ marginLeft: '32px' }}>
                  <p>
                    Trả lời: Sử dụng chức năng quên mật khẩu để reset mật khẩu
                    hoặc liên hệ Admin Hệ thống: dunglv6@vpbank.com.vn,
                    minhhb@vpbank.com.vn
                  </p>
                </div>
              </Collapse>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help" />
              <a
                href="#faq-list-3"
                onClick={e => toggleCollapse(3, e)}
                className={openIndex === 3 ? 'collapsed' : ''}
              >
                Tôi mất nick thì làm như thế nào ?
                <i
                  className={`bx bx-chevron-${
                    openIndex === 3 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 3} timeout="auto" unmountOnExit>
                <div style={{ marginLeft: '32px' }}>
                  <p>Trả lời: Tạo nick mới</p>
                </div>
              </Collapse>
            </li>
          </ul>
        </div>
      </div>
    </FaqStyle>
  );
};

export default FaqSection;
