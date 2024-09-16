import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="w-[550px]">
        <h1 className="text-2xl mb-10 mt-1 text-center font-extrabold">
          Login
        </h1>
        <form className="border-black flex flex-col gap-y-3">
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your name"
          />
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
          />
          <div className="text-right">
            <Link href={"/forgot-password"}>
              <p className="font-bold">Forgot password?</p>
            </Link>
          </div>
          <Button>Login</Button>
          <div>
            <p>
              Don't have an account?
              <Link href={"/sign-up"} className="font-bold mx-1">
                Sign-Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
