import AddTask from "./AddTask";
import ExistingTask from "./ExistingTask";

const TaskList = () => {
    return (
        <section className="pt-[30px]">
            <AddTask />
            <ExistingTask 
                task="Design sign up flow"
                details="By the time a prospect arrives at your signup page, in most cases, they've already By the time a prospect arrives at your signup page, in most cases." 
                id="21"
            />
        </section>
    );
}

export default TaskList;