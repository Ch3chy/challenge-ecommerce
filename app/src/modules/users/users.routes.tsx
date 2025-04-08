import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "./users";
import Loggin from "./views/loggin";

const UsersRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />}>
        <Route
          path="/login"
          element={
            <Suspense>
              <Loggin login />
            </Suspense>
          }
        />
        <Route
          path="/logout"
          element={
            <Suspense>
              <Loggin login={false} />
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/users/logout" replace />} />
      </Route>
    </Routes>
  );
};

export default UsersRoutes;
