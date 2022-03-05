import BasePublic from "./BasePublic";
import UserPic from "../../../components/UserPic";
import Card from "../../../components/Card";
import { useEffect, useState } from "react";

function ProfileItem(props) {
  const { title, value } = props;
  return (
    <div>
      <h2 className='font-bold text-lg text-slate-500'>{title}</h2>
      <p className='font-bold text-sm'>{value}</p>
    </div>
  );
}

export default function Profile(props) {
  const [user, setUser] = useState({
    profile_image: "",
    name: "",
    phone_number: "",
    email: "",
  });
  useEffect(() => {
    if (localStorage.getItem("KLEDO_USER")) {
      const userData = localStorage.getItem("KLEDO_USER");
      setUser({
        profile_image: userData.data.data.user.profile_image,
        name: userData.data.data.user.name,
        phone_number: userData.data.data.user.phone_number,
        email: userData.data.data.user.email,
      });
    }
  }, []);
  return (
    <BasePublic>
      <h1 className='font-bold text-xl'>Profile</h1>
      <Card
        style={
          "p-5 gap-2 relative items-start justify-center bg-slate-200 border border-slate-300"
        }
      >
        <UserPic
          style={"absolute top-5 right-5 w-16 h-16"}
          src={user.profile_image}
        />
        <ProfileItem title='Name' value={user.name} />
        <ProfileItem title='Phone Number' value={user.phone_number} />
        <ProfileItem title='Email' value={user.email} />
      </Card>
    </BasePublic>
  );
}
