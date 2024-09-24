import React, { useState } from 'react';
import { Button, Collapse } from '@mui/material';
import AndroidQR from 'images/home/android/android_qr.png';
import AndroidDownload1 from 'images/home/android/Android-Download-1.jpg';
import AndroidDownload2 from 'images/home/android/Android-Download-2.jpg';
import AndroidStyle from './AndroidStyle';

const AndroidSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AndroidStyle id="android" className="details">
      <div className="container">
        <div className="section-title">
          <h2>Thiết Bị Android</h2>
          <p>Hướng dẫn cài đặt đối với các thiết bị Android.</p>
        </div>

        <div className="row content">
          <div className="col-md-12" data-aos="fade-up">
            <h4 className="text-center">Quét mã QR Code để tải App Android</h4>
            <p className="text-center mb-5">
              <img
                src={AndroidQR}
                width="200"
                className="img-fluid shadow mb-3"
                alt="QR Code"
              />
              <br />
              (Hoặc click{' '}
              <a
                className="content-link"
                href="https://install.appcenter.ms/orgs/apl/apps/dinh-gia/distribution_groups/public%20access"
                target="_blank"
                rel="noopener noreferrer"
              >
                tại đây
              </a>
              )
            </p>

            <p className="text-center mb-5">
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={handleToggleCollapse}
                aria-controls="android-step"
                aria-expanded={isOpen}
              >
                {isOpen ? 'Ẩn hướng dẫn' : 'Hướng dẫn chi tiết'}
              </Button>
            </p>

            <Collapse in={isOpen}>
              <div id="android-step">
                <p className="text-center">
                  Sau khi mở link, màn hình sẽ hiển thị như sau:
                </p>
                <div className="row">
                  <div className="col-md-3" />

                  <div className="col-md-3">
                    <img
                      src={AndroidDownload1}
                      className="img-fluid shadow rounded"
                      alt="Download Step 1"
                    />
                    <div className="text-center mt-3 mb-3">
                      <span className="d-inline-block">
                        Nhấn chọn Go to website
                      </span>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <img
                      src={AndroidDownload2}
                      className="img-fluid shadow rounded"
                      alt="Download Step 2"
                    />
                    <div className="text-center mt-3">
                      <span className="d-inline-block">Nhấn OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </AndroidStyle>
  );
};

export default AndroidSection;
