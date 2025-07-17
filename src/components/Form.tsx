"use client";

import { ValidationSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>();

  const onSubmit = (data: ValidationSchema) => {
    console.log(data);
    toast.success("Sent successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex flex-col gap-4 rounded-xl w-[25%] p-5"
      >
        <h1 className="text-center text-4xl">LET’S TALK!</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="border border-[#000000] opacity-[28%] rounded-lg h-12 px-3"
        />
        {errors.email && (
          <p className="text-red-400">Email field cannot be empty!</p>
        )}
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: true })}
          className=" border border-[#000000] opacity-[28%] rounded-lg h-12 px-3"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message", { required: "true" })}
          className="border border-[#000000] opacity-[28%] rounded-lg h-36 resize-none"
        />
        <button
          className="bg-[#00203F] h-12 rounded-lg hover:bg-[#00203F] hover:opacity-80 cursor-pointer"
          type="submit"
        >
          <p className="text-[#FDFDFD] text-lg"></p>
        </button>
      </form>
    </div>
  );
};

export default Form;
