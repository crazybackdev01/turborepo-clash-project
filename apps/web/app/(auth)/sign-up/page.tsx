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
          Register
        </h1>
        <form className="border-black flex flex-col gap-y-3">
          <Label htmlFor="name" className="font-semibold">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
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
          <Label htmlFor="password" className="font-semibold">
            Confirm Password
          </Label>
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
            id="confirm_password"
          />
          <Button>Register</Button>
          <div>
            <p>
              Already have an account?
              <Link href={"/login"} className="font-bold mx-1">
                Sign-In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
