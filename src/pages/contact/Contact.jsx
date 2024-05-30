import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import bannerImage from "../../assets/images/Banner.png";
import { Spinner } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faLocation} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const notify = (message, type) => {
    const toastType = type === "success" ? toast.success : toast.error;
    return toastType(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+.\S+/;
    const isEmailValid = emailRegex.test(email);
    if (isEmailValid && email.endsWith("@gmail.com")) {
      setSubmit(true);
      setLoading(true);
    } else {
      // email is not valid or does not end with "@gmail.com"
      setSubmit(false);
      setLoading(false);
      notify('Email phải bao gồm đuôi "@gmail.com"');
    }
  };
  return (
    <div>
      <div class="relative w-full ">
        <img
          src={bannerImage}
          alt="About page"
          class="w-full h-[400px] object-cover"
        />
        <span class="absolute top-36 left-[300px] p-2 text-white text-5xl font-bold leading-6 drop-shadow-md">
          Liên Hệ
        </span>
      </div>
      <div className="flex container px-24  mx-auto mt-20 sm:w-[1400px] w-auto">
        <div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-28 mx-auto w-[400px] lg:w-[600px] border-spacing-1"
          >
            <h2 className="text-primaryColor text-center text-2xl font-extrabold mb-12">
              Liên Hệ Với Chúng Tôi
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Họ và tên
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                type="text"
                placeholder="Nhập họ và tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Số điện thoại
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                type="tel"
                placeholder="Nhập số điện thoại của bạn"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                required
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Lời Nhắn
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="Nội dung lời nhắn"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className=" flex items-center justify-center ">
              <button
                className="bg-primaryColor text-white  text-[20px] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:opacity-90"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Spinner className="h-6 w-6 mr-4" />{" "}
                    <span>Đang tải....</span>
                  </div>
                ) : (
                  <span>Gửi Lời Nhắn</span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1>API GG MAP</h1>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 px-24 mx-20 mb-20 ">
        <div class=" flex mx-10 justify-center items-center ">
            <div >
                <FontAwesomeIcon icon={faPhoneVolume}  className="w-[40px] h-[40px] text-primaryColor"/>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-black mb-1">Số Điện Thoại</h2>
                <span className="text-primaryColor font-medium">0345 666 999</span>
            </div>
        </div>
        <div class=" flex mx-10 justify-center items-center ">
            <div >
                <FontAwesomeIcon icon={faLocation}  className="w-[40px] h-[40px] text-primaryColor"/>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-black mb-1">Địa Chỉ</h2>
                <span className="text-primaryColor font-medium">Hải Châu, Đà Nẵng</span>
            </div>
        </div>
        <div class=" flex mx-10 justify-center items-center ">
            <div >
                <FontAwesomeIcon icon={faEnvelope}  className="w-[40px] h-[40px] text-primaryColor"/>
            </div>
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-black mb-1">Email</h2>
                <span className="text-primaryColor font-medium">example@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
