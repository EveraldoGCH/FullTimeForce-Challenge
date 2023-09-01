import React from "react";
import { LayoutProps } from "./type";
import { Header } from ".."


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-[2%] flex items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default Layout;
