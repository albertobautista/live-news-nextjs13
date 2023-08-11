import Link from "next/link";
import React from "react";
import { NavLinks } from "live-news-app/components/header";
import DarkModeButton from "live-news-app/app/DarkModeButton";
import SearchBox from "live-news-app/app/SearchBox";

const Header = () => {
  return (
    <header>
      <div className="flex p-3 items-center">
        <div className="flex-1">
          <Link href="/" prefetch={false}>
            <h1 className="font-serif text-4xl text-center">
              <span className="underline  underline-offset-8 decoration-6 decoration-orange-400">
                Live News
              </span>
            </h1>
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />
      {/* <SearchBox /> */}
    </header>
  );
};

export default Header;
