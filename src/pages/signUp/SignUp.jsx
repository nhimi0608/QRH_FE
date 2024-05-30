import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/Login.png";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";

function SignUp() {
  const [hiddenPass, setHiddenPass] = useState(true);
  const [reHiddenPass, setReHiddenPass] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const handleCheckInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);

    if (isEmailValid && email.endsWith("@gmail.com")) {
      // email is valid and ends with "@gmail.com"
      setLoading(true);
    } else {
      // email is not valid or does not end with "@gmail.com"
      setLoading(false);
    }
  };
  const replaceEmail = (email) => {
    const username = email
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "");
    return email.replace(/^[^@]+/, username);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckInput();
  };

  return (
    <div className="fixed inset-0 flex items-center ">
      <div className="h-full w-full object-cover">
        <img src={loginImage} alt="Images" className="h-full w-full" />
      </div>
      <div className="absolute m-auto rounded-l-[50px]  h-full right-0 w-[50%] bg-gradient-to-b from-[#99c5fd80] to-[#FFFFFF00] px-40">
        <div className="">
          <div className=" flex justify-between py-6">
            <div className="">
              <h2 className="font-semibold">
                Chào Mừng Bạn Đến <br />
                <Link to="/" className="text-lg text-primaryColor font-bold ">
                  ProHealth
                </Link>
              </h2>
            </div>
            <div className="">
              <h2 className=" text-[#8D8D8D] ">
                Bạn đã có tài khoản? <br />
                <Link
                  to="/login"
                  className="text-base text-primaryColor font-semibold "
                >
                  Đăng Nhập
                </Link>
              </h2>
            </div>
          </div>
          <div className="">
            <h1 className="text-primaryColor text-center text-3xl font-bold pt-6 pb-10  pdrop-shadow-sm">
              Đăng Kí ProHealth
            </h1>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col ">
                  <label
                    className="font-medium text-left text-lg mb-1 "
                    htmlFor=""
                  >
                    Họ
                  </label>
                  <input
                    className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type="text"
                    placeholder="Họ của bạn"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  />
                </div>
                <div className="flex flex-col ">
                  <label
                    className="font-medium text-left text-lg mb-1 "
                    htmlFor=""
                  >
                    Tên
                  </label>
                  <input
                    className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type="text"
                    placeholder="Tên của bạn"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="font-medium text-left text-lg mb-1 "
                  htmlFor="phone"
                >
                  Số điện thoại
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  required
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Địa Chỉ Email
                </label>
                <input
                  className="px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                  type="email"
                  placeholder="youraccount@gmail.com"
                  onChange={(e) => setEmail(replaceEmail(e.target.value))}
                  value={email}
                  required
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Mật Khẩu
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type={hiddenPass ? "password" : "text"}
                    placeholder="Mật khẩu của bạn"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  {hiddenPass ? (
                    <FontAwesomeIcon
                      onClick={() => setHiddenPass(!hiddenPass)}
                      className="absolute top-4 right-6"
                      icon={faEyeSlash}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => setHiddenPass(!hiddenPass)}
                      className="absolute top-4 right-6"
                      icon={faEye}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  className="font-medium text-left text-lg mb-1"
                  htmlFor=""
                >
                  Xác Nhận Mật Khẩu
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                    type={reHiddenPass ? "password" : "text"}
                    required
                    placeholder="Nhập lại mật khẩu của bạn"
                    onChange={(e) => setRePassword(e.target.value)}
                    value={rePassword}
                  />
                  {reHiddenPass ? (
                    <FontAwesomeIcon
                      onClick={() => setReHiddenPass(!reHiddenPass)}
                      className="absolute top-4 right-6"
                      icon={faEyeSlash}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => setReHiddenPass(!reHiddenPass)}
                      className="absolute top-4 right-6"
                      icon={faEye}
                    />
                  )}
                </div>
              </div>
              <button className="py-2 bg-primaryColor w-full mb-3 rounded-lg text-xl font-bold text-white opacity-100 active:opacity-80">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Spinner className="h-6 w-6 mr-4" />{" "}
                    <span>Đang tải....</span>
                  </div>
                ) : (
                  <span>Đăng Kí</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
