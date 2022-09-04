import { Route, Routes } from "react-router-dom";
import React from "react";
import { memo } from "react";

import { Login } from "../components/pages/Login";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const RouterConfig: React.FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
