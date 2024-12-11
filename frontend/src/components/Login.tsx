import { AuroraBackground } from "./ui/aurora-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import "./fade-in.css";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = (formSubmissionData: object) => {
    setIsLoading(true);
    console.log(formSubmissionData);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, formSubmissionData)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("authToken", res.data.token);
        navigate("/home");
        toast({
          title: "Logged in!",
          description: "You're logged in successfully.",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <AuroraBackground className={`${isVisible ? "fade-in" : ""} h-full`}>
      <div className="lg:text-3xl md:text-5xl font-bold dark:text-white text-center mt-2">
        Welcome to the IPL Merchandise Store
      </div>
      <div className="overflow-hidden">
        <img
          src="/ipl3.png"
          className="w-36 h-36 object-cover my-4 bg-white rounded-xl"
        />
      </div>

      <Card className="z-10 my-4 w-96">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-center items-center mt-2">
                <span className="mb-1">
                  New to here?{" "}
                  <Link to="/register" className="hover:text-blue-400">
                    Register
                  </Link>
                </span>
                {isLoading ? (
                  <Button className="w-full text-base" disabled>
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full text-base">
                    Sign In
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuroraBackground>
  );
};

export default Login;
