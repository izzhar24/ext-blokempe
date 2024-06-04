import React, { ReactElement } from "react";
import ChatMe from "./ChatMe";

function Footer(): ReactElement {
  return (
    <footer className="relative bg-gray-200 py-4">
        <ChatMe />
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold">
              Copyright © {new Date().getFullYear()}{" "}
              <div className="hover:text-gray-900">
                Dibuat dengan ❤️ oleh Izzhar Studio
              </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
