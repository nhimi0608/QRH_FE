import React from "react";
import bannerImage from "../../assets/images/Banner.png";
import image1 from "../../assets/images/Image1.png";
import image2 from "../../assets/images/Image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faUsers, faSchool} from "@fortawesome/free-solid-svg-icons";


function AboutPage() {
  return (
    <div>
      <div class="relative w-full ">
        <img
          src={bannerImage}
          alt="About page"
          class="w-full  h-[400px] object-cover"
        />
        <span class="absolute top-36 left-[300px] p-2 text-white text-5xl font-bold leading-6 drop-shadow-md">
          Giới Thiệu
        </span>
      </div>
      <div>
        <div className="w-full flex justify-between mt-24 mx-auto max-w-screen-xl">
          <div className="flex-1 pl-20 ">
            <img className="h-[400px]" src={image1} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-primaryColor text-2xl font-extrabold mb-8">
              Thông Tin Về Chúng Tôi
            </h2>
            <span className="pr-20 leading-6">
              Chúng tôi xây dựng website “QR Health Tracker For DTU Students”{" "}
              <br />
              với đầy đủ tính năng giúp sinh viên quản lý sức khỏe của mình một
              <br />
              cách tối ưu nhất bằng cách tạo mã QR để lưu trữ thông tin cá nhân
              <br /> và bảng thông tin sức khỏe cho sinh viên.
            </span>
            <div className="my-7">
              <button className="p-3 bg-primaryColor text-white font-semibold rounded hover:opacity-90">
                {" "}
                Đọc Thêm
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
            <div className="flex rounded">
              <div class="p-4 bg-gray-200 rounded  mr-36">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="h-[30px] w-[30px] text-primaryColor"
                />
                <span class="block font-bold mt-2">20.000</span>
                <span class="block mt-2 font-semibold">Tổng Số Sinh Viên</span>
              </div>
              <div class="p-4 bg-gray-200  rounded  w-[160px]">
                <FontAwesomeIcon
                  icon={faSchool}
                  className="h-[30px] w-[30px] text-primaryColor"
                />
                <span class="block font-bold mt-2">05</span>
                <span class="block mt-2 font-semibold">Tổng Số Cơ Sở</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between m-28  mx-auto max-w-screen-xl">
          <div className="flex-1 pl-20">
            <h2 className="text-primaryColor text-2xl font-extrabold mb-5">
              Mục Tiêu Của Chúng Tôi
            </h2>
            <span className="pr-20 leading-6">
              Mục tiêu là đáp ứng nhu cầu quan trọng trong việc quản lý, <br />{" "}
              theo dõi tình trạng sức khỏe của sinh viên Đại học Duy Tân <br />
              (DTU), cung cấp những thông tin và gợi ý quan trọng về <br />
              cách cải thiện vấn đề sức khỏe, chế độ ăn uống và tập luyện <br />{" "}
              của bạn.
            </span>
            <div className="mt-5">
              <button className="p-3 bg-primaryColor text-white font-semibold rounded hover:opacity-90">
                {" "}
                Đọc Thêm
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="flex-1 ">
            <img className="h-[360px]" src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
