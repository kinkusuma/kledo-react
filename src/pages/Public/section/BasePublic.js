import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import Content from "../../../components/Content";

export default function BasePublic(props) {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <TopBar>
        <TopBar.Item>
          <Link to='/'>
            <p className='font-bold text-lg'>Kledo</p>
          </Link>
        </TopBar.Item>
        <TopBar.Items>
          <TopBar.Item hover>
            <Link to='/profile'>
              <p>Profile</p>
            </Link>
          </TopBar.Item>
          <TopBar.Item hover>
            <Link to='/login'>
              <p>Login</p>
            </Link>
          </TopBar.Item>
        </TopBar.Items>
      </TopBar>

      <Content style={"items-center justify-center"}>
        <div className=' w-96 flex flex-col items-center gap-5'>
          {props.children}
        </div>
      </Content>
    </div>
  );
}
