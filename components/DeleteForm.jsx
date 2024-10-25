"use client";

import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { deleteTask } from "@/utils/action";
import toast from 'react-hot-toast';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit"
      disabled={pending}
      className="btn btn-error btn-xs"
    >
      {pending ? "Pending..." : "Delete"}
  </button>
  );
};

const initialState = {
  message: null,
};

const DeleteForm = ({id}) => {
  const [ state, formAction ] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
      return;
    }

    if (state.message) {
      toast.success("Task deleted")
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id}/>
      <SubmitButton />
    </form>
  );
};

export default DeleteForm;
