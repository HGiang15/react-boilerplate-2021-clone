import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import ChangeLogStyle from './ChangeLogStyle';

const ChangeLog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index, event) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ChangeLogStyle id="changelog">
      <div className="container">
        <div className="section-title">
          <h2>Lịch sử cập nhật</h2>
        </div>

        <div className="accordion-list" id="changelog-list">
          <ul>
            <li className="changelog-item" data-aos="fade-up">
              <i className="bx bx-info-circle icon-help" />
              <a
                href="#changelog-list-1"
                onClick={e => toggleCollapse(1, e)}
                className={openIndex === 1 ? 'collapsed' : ''}
              >
                <b>10/04/2021</b> &ndash; Ra mắt phiên bản MVP:
                <i
                  className={`bx bx-chevron-${
                    openIndex === 1 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 1}>
                <div style={{ marginLeft: '32px' }}>
                  <ol>
                    <li>CMS APL</li>
                    <li>Ứng dụng Định Giá trên mobile</li>
                  </ol>
                </div>
              </Collapse>
            </li>

            <li
              className="changelog-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bx bx-info-circle icon-help" />
              <a
                href="#changelog-list-2"
                onClick={e => toggleCollapse(2, e)}
                className={openIndex === 2 ? 'collapsed' : ''}
              >
                <b>11/01/2021</b> &ndash; Chính thức start dự án APL:
                <i
                  className={`bx bx-chevron-${
                    openIndex === 2 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 2}>
                <div style={{ marginLeft: '32px' }}>
                  <ol>
                    <li>
                      <b>APL:</b> Mục tiêu xây dựng Nền tảng định giá tài sản
                    </li>
                  </ol>
                </div>
              </Collapse>
            </li>

            <li
              className="changelog-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bx bx-info-circle icon-help" />
              <a
                href="#changelog-list-3"
                onClick={e => toggleCollapse(3, e)}
                className={openIndex === 3 ? 'collapsed' : ''}
              >
                <b>15/05/2024</b> &ndash; Chính thức kickoff dự án APL:
                <i
                  className={`bx bx-chevron-${
                    openIndex === 3 ? 'up' : 'down'
                  } icon-show`}
                />
              </a>
              <Collapse in={openIndex === 3}>
                <div style={{ marginLeft: '32px' }}>
                  <ol>
                    <li>
                      <b>APL:</b> Mục tiêu xây dựng Nền tảng định giá tài sản
                    </li>
                    <li>
                      <b>HPL:</b> Xây dựng Nền tảng định giá tài sản 1
                    </li>
                    <li>
                      <b>VPL:</b> Xây dựng Nền tảng định giá tài sản 2
                    </li>
                  </ol>
                </div>
              </Collapse>
            </li>
          </ul>
        </div>
      </div>
    </ChangeLogStyle>
  );
};

export default ChangeLog;
