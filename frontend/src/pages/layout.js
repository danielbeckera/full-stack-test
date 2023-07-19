import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const { token } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/beers");
    } else {
      router.push("/");
    }
  }, [token]);

  // Renderiza o conteúdo das páginas dentro do layout
  return <>{children}</>;
};

export default Layout;
