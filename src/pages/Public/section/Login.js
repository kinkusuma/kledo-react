import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasePublic from "./BasePublic";
import Form from "../../../components/Form";
import Card from "../../../components/Card";
import { login } from "../../../redux/actions";

export default function Login(props) {
  const [loginFailed, setLoginFailed] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post("https://api.jokolodang.com/api/v1/authentication/login", data, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.success) {
          dispatch(login(res.data));
          navigate("/");
        } else {
          setLoginFailed(res.data.message);
        }
      });
  };

  return (
    <BasePublic>
      <h1 className='font-bold text-xl'>Login</h1>
      {loginFailed ? <div className='text-red-500'>{loginFailed}</div> : ""}
      <Card
        style={
          "p-5 gap-2 relative items-start justify-center bg-slate-200 border border-slate-300"
        }
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label>
            <p>Email</p>
          </Form.Label>
          <Form.Input
            type={"email"}
            formHook={{
              ...register("email", {
                required: "Email harus tersedia",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email tidak valid",
                },
              }),
            }}
          />
          {errors.email && (
            <div className='mb-3 text-sm text-red-500'>
              {errors.email.message}
            </div>
          )}
          <Form.Label>
            <p>Password</p>
          </Form.Label>
          <Form.Input
            type={"password"}
            formHook={{
              ...register("password", {
                required: "Password harus tersedia",
              }),
            }}
          />
          {errors.password && (
            <div className='mb-3 text-sm text-red-500'>
              {errors.password.message}
            </div>
          )}
          <span className='h-5'></span>
          <Form.Submit>
            <p>Login</p>
          </Form.Submit>
        </Form>
      </Card>
    </BasePublic>
  );
}
