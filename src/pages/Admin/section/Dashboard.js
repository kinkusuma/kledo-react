import React, { useState, useEffect } from "react";
import BaseAdmin from "./BaseAdmin";
import Card from "../../../components/Card";

export default function Dashboard(props) {
  const [user, setUser] = useState({
    name: "",
  });
  useEffect(() => {
    if (localStorage.getItem("KLEDO_USER")) {
      const userData = localStorage.getItem("KLEDO_USER");
      setUser({
        name: userData.data.data.user.name,
      });
    }
  }, []);
  return (
    <BaseAdmin>
      <h2 className='font-bold text-lg'>Dashboard</h2>
      <Card
        _style={
          "items-center justify-center bg-slate-200 border border-slate-300"
        }
      >
        <h1 className='font-bold text-xl text-slate-500'>Selamat Datang</h1>
        <p className='text-slate-500'>{user.name}</p>
      </Card>
    </BaseAdmin>
  );
}
