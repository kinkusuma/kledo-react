import "./App.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./redux/store";
import Dashboard from "./pages/Admin/section/Dashboard";
import Shipping from "./pages/Admin/section/Shipping";
import Login from "./pages/Public/section/Login";
import Profile from "./pages/Public/section/Profile";

const queryClient = new QueryClient();

function PrivateRoute(props) {
  const user = localStorage.getItem("KLEDO_USER");
  return user ? props.children : <Navigate to='/login' />;
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route
              path='/shipping'
              element={
                <PrivateRoute>
                  <Shipping />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
