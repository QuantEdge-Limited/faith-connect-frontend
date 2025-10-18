import React from "react";
import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  async function handleSubmit(data: unknown) {
    "use server";
    // handle server-side logic
    console.log(data);
  }

  return (
    <section className="flex min-h-screen ">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Background Image using next/image */}
        <Image
          src="https://images.pexels.com/photos/31479127/pexels-photo-31479127.jpeg"
          alt="St. Francis of Assisi Ruiru Parish"
          fill
          className="object-cover"
          priority
          unoptimized
        />

        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-end p-12 h-full text-white">
          {/* Website Title */}
          <Link href="/">
            <p className="text-xl tracking-widest text-gray-300 mb-2">
              Faith Connect
            </p>
          </Link>

          {/* Page Heading */}
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>

          {/* Subtitle / Description */}
          <p className="text-lg text-gray-200">
            Sign in to continue your spiritual journey
          </p>
        </div>
      </div>

      {/* Right Side - Login Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <AuthForm
            type="signup"
            onSubmit={handleSubmit}
            submitLabel="register"
          />
        </div>
      </div>
    </section>
  );
}
