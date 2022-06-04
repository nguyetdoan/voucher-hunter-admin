import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authActions from "./actions/authActions";
import Layout from "./components/layout";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/LoginPage";
import { adminRoute } from "./routes";

function App() {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.loadUser());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <Route path="/" element={<Layout />}>
            {adminRoute.map((route, index) => (
              <Route
                key={`route-${index}`}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        )}
        <Route path="/login" element={<LoginPage />} />
        {!user && <Route path="*" element={<LoginPage />} />}
        {user && <Route path="*" element={<NotFound />} />}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
