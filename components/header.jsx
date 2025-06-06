import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, CarFront, Heart, Layout } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const CarFinderHeader = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <Image
            src={"/globe.svg"}
            alt="VEhicle logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  <span className="hidden md:inline"></span>
                  Back to App
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              <Link href="/saved-cars">
                <Button>
                  <Heart size={18} />
                  <span className="hidden md:inline"></span>
                  Saved cars
                </Button>
              </Link>
              {isAdmin ? (
                <Link href="/admin">
                  <Button>
                    <Layout size={18} />
                    <span className="hidden md:inline"></span>
                    Admin Portal
                  </Button>
                </Link>
              ) : (
                <Link href="/reservations">
                  <Button>
                    <CarFront size={18} />
                    <span className="hidden md:inline"></span>
                    My Reservations
                  </Button>
                </Link>
              )}{" "}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default CarFinderHeader;
