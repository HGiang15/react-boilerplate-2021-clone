import React, { useState } from 'react';
import { Button, Collapse } from '@mui/material';
import IosQR from 'images/home/ios/ios_qr.png';
import IosDownload1 from 'images/home/ios/IOS1.jpg';
import IosDownload2 from 'images/home/ios/IOS2.jpg';
import IosDownload3 from 'images/home/ios/IOS3.jpg';
import IosDownload4 from 'images/home/ios/IOS4.jpg';
import IosDownload5 from 'images/home/ios/IOS5.jpg';
import TestFlightQR from 'images/home/test_flight/test_flight_qr.png';
import TestFlight1 from 'images/home/test_flight/TestFight1.jpg';
import TestFlight2 from 'images/home/test_flight/TestFight2.jpg';
import TestFlight3 from 'images/home/test_flight/TestFight3.jpg';
import TestFlight4 from 'images/home/test_flight/TestFight4.jpg';
import IosStyle from './IosStyle';

const IosSection = () => {
  const [isOpenStep1, setIsOpenStep1] = useState(false);
  const [isOpenStep2, setIsOpenStep2] = useState(false);

  const handleToggleCollapseStep1 = () => {
    setIsOpenStep1(!isOpenStep1);
  };

  const handleToggleCollapseStep2 = () => {
    setIsOpenStep2(!isOpenStep2);
  };

  return (
    <IosStyle id="ios" className="details">
      <div className="container">
        <div className="section-title">
          <h2>Thiết Bị iOS</h2>
          <p>Hướng dẫn cài đặt đối với các thiết bị iOS.</p>
        </div>

        <div className="row content">
          <div className="col-md-12" data-aos="fade-up">
            <h4 className="text-center mb-3">
              Bước 1. Quét mã QR Code để tải ứng dụng TestFlight
            </h4>
            <p className="text-center mb-5">
              <img
                src={TestFlightQR}
                width="200"
                className="img-fluid shadow mb-3"
                alt="QR Code"
              />
              <br />
              (Hoặc click{' '}
              <a
                className="content-link"
                href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8"
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
                onClick={handleToggleCollapseStep1}
              >
                {isOpenStep1 ? 'Ẩn hướng dẫn' : 'Hướng dẫn chi tiết'}
              </Button>
            </p>

            <Collapse in={isOpenStep1}>
              <div id="ios-step-1" className="row mb-5">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={TestFlight1}
                    className="img-fluid shadow rounded"
                    alt="Step 1"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>a. Tải App TestFlight</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={TestFlight2}
                    className="img-fluid shadow rounded"
                    alt="Step 2"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>b. Mở App TestFlight</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={TestFlight3}
                    className="img-fluid shadow rounded"
                    alt="Step 3"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>c. Chấp nhận điều khoản</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={TestFlight4}
                    className="img-fluid shadow rounded"
                    alt="Step 4"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>d. Hoàn tất cài đặt</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={TestFlight4}
                    className="img-fluid shadow rounded"
                    alt="Step 5"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>e. Màn hình TestFlight</span>
                  </div>
                </div>
              </div>
            </Collapse>

            <h4 className="text-center">
              Bước 2. Quét mã QR Code để tải và cài đặt ứng dụng Định Giá
            </h4>
            <p className="text-center mb-5">
              <img
                src={IosQR}
                width="200"
                className="img-fluid shadow mb-3"
                alt="QR Code"
              />
              <br />
              (Hoặc click{' '}
              <a className="content-link" href="https://bit.ly/vpb_ios_apl">
                tại đây
              </a>
              )
            </p>

            <p className="text-center mb-5">
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={handleToggleCollapseStep2}
              >
                {isOpenStep2 ? 'Ẩn hướng dẫn' : 'Hướng dẫn chi tiết'}
              </Button>
            </p>

            <Collapse in={isOpenStep2}>
              <div id="ios-step-2" className="row mb-5">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={IosDownload1}
                    className="img-fluid shadow rounded"
                    alt="Step 1"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>a. Cài đặt app Định Giá</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={IosDownload2}
                    className="img-fluid shadow rounded"
                    alt="Step 2"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>b. Hoàn thành cài đặt</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={IosDownload3}
                    className="img-fluid shadow rounded"
                    alt="Step 3"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>c. Sử dụng Định Giá</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={IosDownload4}
                    className="img-fluid shadow rounded"
                    alt="Step 4"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>d. Màn hình khởi động</span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg text-center">
                  <img
                    src={IosDownload5}
                    className="img-fluid shadow rounded"
                    alt="Step 4"
                  />
                  <div className="text-center mt-3 mb-3">
                    <span>e. Hoàn thành đăng ký</span>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </IosStyle>
  );
};

export default IosSection;
