"use client"
import HeaderImage from "@/app/lib/components/HeaderImage";
import MainHeader from "@/app/lib/components/MainHeader";
import ProfileHeader from "@/app/lib/components/ProfileComponents/ProfileHeader";
import { useState } from "react";
const Page = () => {
    return (
      <main className=" overflow-hidden h-screen" >
        <HeaderImage />
        <ProfileHeader />
        <MainHeader />
      </main>
    );
}

export default Page;