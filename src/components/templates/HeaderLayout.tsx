import { memo, FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../organisms/layout/Header";

// type Props = {
//   children: ReactNode;
// };

export const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
