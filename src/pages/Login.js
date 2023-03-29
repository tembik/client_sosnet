import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logUser } from "../services/request";
import styled from "styled-components";
import gambarBack from "../images/background-login.jpg";

const DivKontainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: center; */
  flex-direction: column;
  padding: 13px 5%;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${gambarBack});
  background-size: cover;
  /* position: fixed; */
`;

const SpanJudul = styled.span`
  font-size: 40px;
`;

const FormLog = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
  background: #efefef;
`;

const LabelLog = styled.label`
  margin: 10px 0;
`;

const InputLog = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const ButtonLog = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background: #1876f2;
`;

const LinkReg = styled(Link)`
  text-decoration: none;
`;

const PReg = styled.p`
  margin-top: 10px;
`;

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitLog = (e) => {
    e.preventDefault();
    const userData = { username: username, password: password };
    logUser(userData).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        dispatch({ type: "LOGIN", payload: response.data });
        // navigate("/")
        window.location.href = "/";
      }
    });
  };

  return (
    <DivKontainer>
      <SpanJudul>Login</SpanJudul>
      <FormLog onSubmit={onSubmitLog}>
        <LabelLog>Username</LabelLog>
        <InputLog
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabelLog>Password</LabelLog>
        <InputLog
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonLog>Login</ButtonLog>
        <PReg>
          belum punya akun? silahkan <LinkReg to="/register">register</LinkReg>
        </PReg>
      </FormLog>
    </DivKontainer>
  );
};
export default Login;
