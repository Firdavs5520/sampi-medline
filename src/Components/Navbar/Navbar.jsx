import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a
        href="https://yandex.uz/maps/?ll=69.331509%2C41.364711&mode=routes&rtext=~41.364888%2C69.331461&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D112768636237&z=18.8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:bg-yellow-500 duration-300 p-1.5 rounded-lg "
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Yandex_Go_icon.svg/1200px-Yandex_Go_icon.svg.png"
          alt=""
          className="w-8"
        />{" "}
        Sampi Medlinega Yandex Go orqali borish
      </a>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2.5 hover:bg-white hover:text-black  bg-black text-white rounded-lg font-bold duration-300 hover:border-black border"
      >
        <a
          href="tel:+998955604444"
          className="flex items-center  transition-colors duration-300"
        >
          <button>Qo'ng'iroq qilish</button>
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex justify-center my-4 mx-44">
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 drop-shadow">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            <img
              src="https://i.ibb.co/nsx7n7v0/SAMPI-MEDLINE-SALOMATLIK-MARKAZI.png"
              alt=""
              className="h-8 w-auto"
            />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
