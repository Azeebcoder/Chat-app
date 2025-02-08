import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      firstName,
      lastName,
      bio,
      email,
      phoneNumber,
      password,
      confirmPassword,
      photo,
    });
    setUserName("");
    setFirstName("");
    setLastName("");
    setBio("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
    setPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl flex flex-col space-y-6 items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-700">
          Join Us
        </h1>

        <div
          className="w-40 h-40 bg-gray-100 flex items-center justify-center border rounded-full overflow-hidden cursor-pointer"
          onClick={handleProfileClick}
        >
          {photo ? (
            <img
              src={photo}
              alt="Selected"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">No Profile Photo</span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Upload Photo */}
          <div>
            <input
              type="file"
              id="photo"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Username */}
          <InputField
            type={"text"}
            id={"username"}
            name={"username"}
            value={userName}
            setValue={setUserName}
            text={"Username"}
          />

          {/* First and Last Name */}
          <div className="grid grid-cols-2 gap-4">

            <InputField
              type={"text"}
              id={"firstName"}
              name={"firstName"}
              value={firstName}
              setValue={setFirstName}
              text={"First Name"}
            />

          <InputField
            type={"text"}
            id={"LastName"}
            name={"LastName"}
            value={lastName}
            setValue={setLastName}
            text={"Last Name"}
          />

          </div>

          {/* Bio */}
          <div className="relative w-full">
            <textarea
              id="bio"
              name="bio"
              placeholder=" "
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="peer w-full p-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label
              htmlFor="bio"
              className="absolute left-4 -top-2.5 text-sm bg-white px-1 transform scale-75 origin-left transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:scale-120 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:scale-100 cursor-text"
            >
              Bio
            </label>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-4">

          <InputField
              type={"email"}
              id={"email"}
              name={"email"}
              value={email}
              setValue={setEmail}
              text={"Email"}/>
            
            <InputField 
              type={"number"}
              id={"phone"}
              name={"phone"}
              value={phoneNumber}
              setValue={setPhoneNumber}
              text={"Phone Number"}/>

          </div>

          {/* Password */}
            <InputField
              type={"password"}
              id={"password"}
              name={"password"}
              value={password}
              setValue={setPassword}
              text={"Password"}
            />
            <InputField
              type={"password"}
              id={"confirm-password"}
              name={"confirm-password"}
              value={confirmPassword}
              setValue={setConfirmPassword}
              text={"confirm password"}
            />

          <Button text={"Sign Up"} />
        </form>

        <p
          className="mt-4 text-center text-blue-600 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login Now
        </p>
      </div>
    </div>
  );
};

export default SignUp;
