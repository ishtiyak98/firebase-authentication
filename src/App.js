import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route
          path="/user-profile"
          element={
            <RequireAuth>
              <UserProfile></UserProfile>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
