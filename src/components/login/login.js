import React, { useState } from "react";
import "./styles.scss";
export default function Login(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.login({
      name,
      pass,
    });
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
      <>
        <div className="container">
          <div className="container-layout">
            <div className="login-layout">
              <form className="login-layout-form" onSubmit={onSubmit}>
                <h3>Hệ Thống Đăng Nhập</h3>
                <input
                  className="input"
                  onChange={onChangeName}
                  name="username"
                  placeholder="Username"
                  text="text"
                />
                <input
                  className="input"
                  onChange={onChangePass}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <input value="Đăng Nhập" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
