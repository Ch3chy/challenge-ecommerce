import { FC, useEffect } from "react";
import { useUsersStore } from "../stores/useUsersStore";
import { useNavigate } from "react-router-dom";

const Loggin: FC<{ login: boolean }> = ({ login: inLogin }) => {
  const navigate = useNavigate();
  const { login, logout } = useUsersStore();

  useEffect(() => {
    if (inLogin) {
      login();
    } else {
      logout();
    }
    navigate("/");
  }, [inLogin]);

  return null;
};

export default Loggin;
