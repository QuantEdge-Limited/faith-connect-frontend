"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/schema/schema";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useTransition } from "react";

// List of parishes/branches under the main church
const branches = [
  "St. Mary's Parish - Downtown",
  "St. Joseph's Parish - Westside",
  "Holy Trinity Parish - Riverside",
  "Our Lady of Grace Parish - Uptown",
  "Sacred Heart Parish - Eastview",
  "St. Peter's Parish - Hilltop",
  "Christ the King Parish - Lakeside",
  "St. Michael's Parish - Greenfield",
];

export function AuthForm() {
  // Initialize react-hook-form with Zod validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      branch: "",
      email: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-[#D4AF37]/20 shadow-xl text-[#0D090A]">
      {/* Card Header - responsive text sizing */}
      <CardHeader className="text-center sm:text-left">
        <CardTitle className="text-3xl font-bold mb-2">Sign In</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        {/* React Hook Form wrapper */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            {/* Branch Selection Dropdown */}
            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Select Your Branch
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full h-10 sm:h-11 border border-gray-200 rounded-md focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 text-sm sm:text-base">
                        <SelectValue placeholder="Select your branch" />
                      </SelectTrigger>
                    </FormControl>
                    {/* Dropdown content with responsive positioning */}
                    <SelectContent className="w-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
                      {branches.map((branch, index) => (
                        <SelectItem
                          key={index}
                          value={branch
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}
                          className="text-sm sm:text-base"
                        >
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Email & Phone Fields */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@gmail.com"
                      className="h-10 sm:h-11 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 text-sm sm:text-base"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            {/* Full width with responsive padding and text size */}
            <Button
              type="submit"
              className="w-full h-11 sm:h-12 py-2 sm:py-3 bg-[#D4AF37] text-white hover:from-[#2a1158] hover:to-[#2a0a8a] transition-all duration-200 text-sm sm:text-base font-medium flex items-center justify-center gap-2"
              disabled={isPending}
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
