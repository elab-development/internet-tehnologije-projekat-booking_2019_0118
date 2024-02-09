import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/newUser/NewUser";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                  <Home />
              }
            />
            <Route path="users">
              <Route
                index
                element={
                    <List/>
                }
              />
              <Route
                path=":userId"
                element={
                    <Single />
                }
              />
              <Route
                path="new"
                element={
                    <NewUser title="Add New User" />
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                    <List  />
                }
              />
              <Route
                path=":productId"
                element={
                    <Single />
                }
              />
              <Route
                path="new"
                element={
                    <NewHotel  />
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                    <List  />
                }
              />
              <Route
                path=":productId"
                element={
                    <Single />
                }
              />
              <Route
                path="new"
                element={
                    <NewRoom  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
