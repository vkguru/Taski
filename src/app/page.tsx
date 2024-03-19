"use client"

import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import NoTask from "@/components/NoTask";
import AddTask from "@/components/AddTask";
import ExistingTask from "@/components/ExistingTask";
import CompletedTask from "@/components/CompletedTask";
import ArrowDownGrey from "@/components/icons/ArrowDownGrey";
import Loading from "@/components/Loading";

type TaskProps = {
  userId: string,
  id: string,
  title: string,
  completed: boolean
}

export default function Home() {
  const [searchResult, setSearchResult] = useState(false);
  const [hasTask, setHasTask] = useState(false);
  const [promptMessage, setPromptMessage] = useState("You have no task listed");
  const [welcomeMessage, setWelcomeMessage] = useState("Create tasks to achieve more.");
  const [userName, setUserName] = useState("John");
  const [completeTask, setCompleteTask] = useState<Array<TaskProps>>([]);
  const [incompleteTask, setIncompleteTask] = useState<Array<TaskProps>>([]);
  const [isLoading, setIsLoading] =  useState(false);

  const creatTask = () => {
    setHasTask(true);
    getTask();
  }

  const getTask = () => {
    const completed: TaskProps[] = [];
    const notCompleted: TaskProps[] = [];
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}?userId=1`)
    .then(res => res.json())
    .then(data => {
      data.forEach((el: TaskProps) => {
        if(el.completed === true) {
          completed.push(el);
          setCompleteTask(completed);
          setIsLoading(false);
        } else {
          notCompleted.push(el);
          setIncompleteTask(notCompleted);
          setWelcomeMessage(`You’ve got ${notCompleted.length} tasks to do.`);
          setIsLoading(false);
        }
      })
    })
    .catch(err => err)
  }

  return (
    <>
      <Welcome 
        name={userName} 
        subtext={welcomeMessage} 
      />
      {isLoading && <Loading />}
      {!hasTask?
        <NoTask 
          message={promptMessage}
          result={searchResult}
          onClick={creatTask}
        />
        :
        <section className="pt-[30px]">
            <AddTask />
            {incompleteTask.map((task) => 
              <ExistingTask 
                key={task.id}
                task={task.title}
                details={task.title} //The response data does not contail details of the task 
                id={task.id}
              />
            )}

            <div className="flex justify-between m-[15px]">
              <span className="flex items-center gap-[6px]">
                <h3 className="text-[#8D9CB8] font-semibold">Completed</h3>
                <ArrowDownGrey />
              </span>

              <button className="text-[#FF5E5E] font-semibold bg-[#FF8C8C26] py-[3px] px-[5px]">Delete All</button>
            </div>

            {completeTask.map(task => 
              <CompletedTask 
                key={task.id}
                task={task.title}
                id={task.id}
                checked={task.completed}
              />  
            )}
        </section>
      }
    </>
  );
}
