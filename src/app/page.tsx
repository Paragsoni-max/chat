"use client";
import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Chat from "@/components/shared/Chats";

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Start with null for loading state

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    // Check if username and password are stored in local storage

    // 2f05e116-b4c9-4898-bd9e-d09696fff5ef
    // 3790ba69-ebd5-4538-a05b-6c87e18d79bd
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = (values: z.infer<typeof formSchema>) => {
    // Store username and password in local storage (for demonstration only).
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);

    // Set the logged-in state to true
    setIsLoggedIn(true);
  };

  // Show a loading state while checking local storage
  if (isLoggedIn === null) {
    return <div>Loading...</div>; // You can replace this with a spinner or similar
  }

  return (
    <div className={isLoggedIn ? "h-screen" : "h-screen flex justify-center items-center"}>
      {isLoggedIn ? (
        <Chat />
      ) : (
        <div className="sm:w-1/2 w-[90%] mx-auto h-fit">
          <h1 className="text-left mb-8 text-4xl font-bold text-gray-800">Login</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-md">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-md">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} type="password" />
                    </FormControl>
                    <FormDescription>This is your user secret.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
