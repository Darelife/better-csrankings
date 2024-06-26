"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <Link href="/home" className={buttonVariants({
      })}>
        Go to Main Page
      </Link>
    </div>
  );
};

export default Home;
