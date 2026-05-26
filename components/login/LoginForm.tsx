"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter valid email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Minimum 6 characters"),

  remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setLoading(false);

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      {/* Left Section */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Welcome back
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                {...register("password")}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("remember")}
              />

              <label className="text-sm text-gray-600">
                Remember me
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-all duration-200"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Demo Credentials
            </p>

            <p className="text-sm text-gray-600">
              Email: admin@test.com
            </p>

            <p className="text-sm text-gray-600">
              Password: 123456
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex bg-blue-600 items-center justify-center px-16">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold mb-6">
            ticktock
          </h1>

          <p className="text-lg leading-8 text-blue-100">
            Introducing ticktock, our cutting-edge timesheet web
            application designed to revolutionize how you manage
            employee work hours.
          </p>
        </div>
      </div>
    </div>
  );
}