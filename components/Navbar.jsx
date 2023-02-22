import { ROUTES } from "@/lib/routes";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaLightbulb, FaUsers } from "react-icons/fa";
import { Container } from ".";

export const Navbar = () => {
  const { asPath } = useRouter();
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const transparentize = () => {
      if (window.scrollY) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener("scroll", () => transparentize());

    return window.addEventListener("scroll", () => transparentize());
  }, []);

  return (
    <nav
      className={clsx(
        "w-full sticky top-0 text-black h-8 sm:h-12  flex justify-between items-center z-30",
        transparent
          ? "bg-transparent"
          : "bg-black bg-opacity-40 backdrop-filter backdrop-blur-[3px]"
      )}
    >
      <Container extraClasses="flex justify-between w-full items-center">
        <Link
          href={"/"}
          className="text-xl sm:text-lg font-bold text-orange-700 flex gap-2 items-center"
        >
          <Image src={"/images/logo.png"} alt="logo" width={150} height={50} />
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4 items-center text-slate-50">
            {ROUTES.map(({ name, route }, idx) => (
              <li
                key={idx}
                className={clsx(
                  "capitalize hover:font-medium text-sm sm:text-base",
                  asPath === route &&
                    "font-semibold underline underline-offset-8"
                )}
              >
                <Link href={route}>{name}</Link>
              </li>
            ))}
          </ul>

          <button className="text-orange-500">
            <FaLightbulb />
          </button>
        </div>
      </Container>
    </nav>
  );
};
