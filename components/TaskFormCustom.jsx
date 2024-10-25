'use client';
import { useEffect } from 'react';
import { createTaskCustom as createTask } from '@/utils/action';
import { useFormStatus, useFormState } from 'react-dom'; 
import toast from 'react-hot-toast';

const SubmitButton = () =>  {
  const { pending } = useFormStatus();

  return (
    <button 
    type="submit" 
      disabled={pending}
      className="btn btn-primary join-item"
    >
      {pending ? "Please wait..." : "Create Task" }
    </button>
  )
}

const initialState = {
  message: null,
};

const TaskForm = () => {
  // const [content, setContent] = useState(''); 
  const [ state, formAction ] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
      return;
    }

    if (state.message) {
      toast.success("Task created")
    }
  }, [state]);


  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createTask(formData);
    setContent('');
  };
  */

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input 
          // onChange={(e) => setContent(e.target.value)}
          // value={content}
          name="content"
          type="text" 
          className="input input-boarded join-item w-full"
          placeholder="Create a new task"
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskForm;
