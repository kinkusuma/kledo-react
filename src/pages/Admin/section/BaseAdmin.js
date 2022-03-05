import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import UserPic from "../../../components/UserPic";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import { logout } from "../../../redux/actions";

export default function BaseAdmin(props) {
  const [user, setUser] = useState({
    profile_image: "",
    name: "",
  });
  useEffect(() => {
    if (localStorage.getItem("KLEDO_USER")) {
      const userData = localStorage.getItem("KLEDO_USER");
      setUser({
        profile_image: userData.data.data.user.profile_image,
        name: userData.data.data.user.name,
      });
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className='w-screen h-screen flex flex-col'>
      <TopBar>
        <TopBar.Item>
          <Link to='/'>
            <p className='font-bold text-lg'>Kledo</p>
          </Link>
        </TopBar.Item>
        <TopBar.Items>
          <TopBar.Item>
            <Link to='/profile'>
              <UserPic style={"w-7 h-7"} src={user.profile_image} />
            </Link>
          </TopBar.Item>
          <TopBar.Item>
            <Link to='/profile'>
              <p>{user.name}</p>
            </Link>
          </TopBar.Item>
        </TopBar.Items>
      </TopBar>

      <Content>
        <SideBar>
          <SideBar.Items>
            <div className='self-start'>
              <SideBar.Item
                style={"border-b border-slate-400 border-opacity-50"}
                hover
              >
                <Link to='/'>
                  <div className='w-full h-full flex items-center gap-2'>
                    <Icon.House size='16' />
                    <p>Dashboard</p>
                  </div>
                </Link>
              </SideBar.Item>
              <SideBar.Item
                style={"border-b border-slate-400 border-opacity-50"}
                hover
              >
                <Link to='/shipping'>
                  <div className='w-full h-full flex items-center gap-2'>
                    <Icon.Truck size='16' />
                    <p>Shipping Comps</p>
                  </div>
                </Link>
              </SideBar.Item>
            </div>
            <SideBar.Item style={"self-end bg-blue-600"}>
              <button
                className='w-full h-full flex items-center gap-2 text-white'
                onClick={userLogout}
              >
                <Icon.Exit size='16' />
                <p>Logout</p>
              </button>
            </SideBar.Item>
          </SideBar.Items>
        </SideBar>
        <Content
          style={"w-full h-full p-5 bg-slate-300 items-center justify-center"}
        >
          <Card style={"p-5 relative bg-slate-100 border border-slate-300"}>
            {props.children}
          </Card>
        </Content>
      </Content>
    </div>
  );
}
