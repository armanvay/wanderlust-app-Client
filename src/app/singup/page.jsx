"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const SingUpPage = () => {
    const router =useRouter()
    const onSubmit =async(e)=>{
          e.preventDefault();

          const name =e.target.name.value
          const email = e.target.email.value;
          const password = e.target.password.value;
          const photo = e.target.photo.value;

const { data, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});
     if (data) {
       router.push("/");
     } else if (error) {
       alert("This is rong");
     }


    }
    const handelGoogle = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-4 border shadow mt-10 rounded-2xl">
        <h2 className="text-2xl font-bold text-center">SingUp </h2>
        <Form className="flex w-96 p-4 flex-col gap-4 " onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Your Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Your Email" />
            <FieldError />
          </TextField>
          <TextField isRequired name="photo" type="text">
            <Label>Your photo Url</Label>
            <Input placeholder="Your Photo url" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters</Description>
            <FieldError />
          </TextField>
          <div className="flex flex-col gap-2">
            <Button
              className={"w-full bg-black text-white font-bold"}
              type="submit"
            >
              <Check />
              Regeter Now
            </Button>
            <Button
              onClick={handelGoogle}
              variant="outline"
              className={"w-full font-bold border border-blue-500"}
            >
              <FaGoogle></FaGoogle>
              Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SingUpPage;
