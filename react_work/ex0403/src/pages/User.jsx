import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signUp } from "../jslib/supa";
import Swal from "sweetalert2";

function User() {
  const { userId } = useParams();
  console.log(userId);
  

  useEffect(() => {
    // 이게 되면은.. 마이페이지를 띄워줘야하고..
    // 이게 안되면 로그인하는 페이지로 이동...
    const res = supabase.auth.getUser();
    useNavigate('/login');  
  }, []);

  const sign = async () => {
    const { data, error } = await signUp("parkmyounghoi@gmail.com", "123456");
    console.log(error);
    Swal.fire({
      title: `${data}`,
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <>
      <div>User</div>
      <button onClick={sign}>회원가입</button>
    </>
  );
}

export default User;
