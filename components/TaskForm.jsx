import { createTask } from '@/utils/action';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input 
          name="content"
          type="text" 
          className="input input-boarded join-item w-full"
          placeholder="Create a new task"
          required
        />
        <button 
          type="submit" 
          className="btn btn-primary join-item"
        >
          Create Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm;
