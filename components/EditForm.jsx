
import { editTask } from "@/utils/action";

const EditForm = ({task}) => {
  const { id, completed, content} = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 rounded-lg"
    >
      <input type="hidden" name="id" value={id}/>
      <input 
        type="text" 
        name="content"
        placeholder="Edit task"
        className="input input-bordered w-full"
        defaultValue={content}
        required 
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input 
            type="checkbox" 
            id="completed" 
            name="completed" 
            className="checkbox checkbox-primary checkbox-sm" 
            value={completed}
            defaultChecked={completed} 
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Save
      </button>
    </form>
  )
}

export default EditForm;
