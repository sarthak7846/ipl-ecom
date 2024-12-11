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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastAction } from "./ui/toast";

import "./fade-in.css";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 chars",
  }),
});

const Register = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
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
      .post("http://localhost:3000/register", formSubmissionData)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("authToken", res.data.token);
        toast({
          title: "Registered!",
          description: "Account created successfully.",
        });
        navigate("/confirmation", { state: { iplTeam: res.data.iplTeam } });
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response && err.response.status === 403) {
          toast({
            title: "Registration Error",
            description: err.response.data.message,
            variant: "destructive",
            action: (
              <ToastAction
                altText="Login button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </ToastAction>
            ),
          });
        } else {
          toast({
            title: "Registration Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
        console.log(err.response);
      });
  };

  return (
    <>
      <AuroraBackground className={`${isVisible ? "fade-in" : ""}`}>
        <div className="lg:text-3xl md:text-5xl font-bold dark:text-white text-center mt-2">
          Welcome to the IPL Merchandise Store
        </div>
        <img
          src="/ipl3.png"
          className="w-36 h-36 object-cover my-4 bg-white rounded-xl"
        />
        <Card className="z-10 my-4 w-96">
          <CardHeader>
            <CardTitle className="text-center">Join Now</CardTitle>
            <CardDescription className="text-center">
              Register today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                    Already have an account?{" "}
                    <Link to="/login" className="hover:text-blue-400">
                      Login
                    </Link>
                  </span>
                  {isLoading ? (
                    <Button className="w-full text-base" disabled>
                      Please wait
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full text-base">
                      Sign Up
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </AuroraBackground>
    </>
  );
};

export default Register;
