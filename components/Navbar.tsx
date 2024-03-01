"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="py-4 px-12 flex justify-between items-center w-full">
      <div className="flex items-center">
        <Image alt="Logo Image" src={logo} width={100} height={100} />
      </div>
      <div className="hidden lg:flex items-center space-x-10 text-2xl font-bold">
        <Link href="#" className="text-black">
          Home
        </Link>
        <Link href="#" className="text-black">
          About Us
        </Link>
        <Link href="#" className="text-black">
          Contact Us
        </Link>
        <Link href="#" className="text-black">
          Gallery
        </Link>
        <Link href="#" className="text-black">
          Services
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <RxHamburgerMenu size={25} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-5 items-end justify-end  mx-auto px-4 py-5 font-bold text-xl">
            <SheetClose>
              <Link href="#">Home</Link>
            </SheetClose>
            <SheetClose>
              <Link href="#">About Us</Link>
            </SheetClose>
            <SheetClose>
              <Link href="#">Contact Us</Link>
            </SheetClose>
            <SheetClose>
              <Link href="#">Gallery</Link>
            </SheetClose>
            <SheetClose>
              <Link href="#">Services</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
