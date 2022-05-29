import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authActions from "./actions/authActions";
import Layout from "./components/layout";
import LoginPage from "./pages/LoginPage";
import { adminRoute } from "./routes";

function App() {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.loadUser());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <Route path="/" element={<Layout />}>
            {adminRoute.map((route) => (
              <Route path={route.path} element={<route.component />} />
            ))}
          </Route>
        )}
        <Route path="/login" element={<LoginPage />} />
        {!user && <Route path="*" element={<LoginPage />} />}
        {user && <Route path="*" element={<>Not found</>} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
