"use client"

import React, { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import NoTask from "@/components/NoTask";
import AddTask from "@/components/AddTask";
import ExistingTask from "@/components/ExistingTask";

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
  const [taskList, setTaskList] = useState<Array<TaskProps>>([]);

  const creatTask = () => {
    setHasTask(true);
    getTask();
  }

  // useEffect(() => {
  //   getTask()
  // })

  const getTask = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}?userId=1`)
    .then(res => res.json())
    .then(data => {
      console.log(taskList);
      setTaskList(data);
      console.log(taskList)
    })
    .catch(err => err)
  }

  return (
    <>
      <Welcome 
        name={userName} 
        subtext={welcomeMessage} 
      />
      {!hasTask?
        <NoTask 
          message={promptMessage}
          result={searchResult}
          onClick={creatTask}
        />
        :
        <section className="pt-[30px]">
            <AddTask />
            {taskList.map((task) => 
              <ExistingTask 
                key={task.id}
                task={task.title}
                details="By the time a prospect arrives at your signup page, in most cases, they've already By the time a prospect arrives at your signup page, in most cases." 
                id={task.id}
              />
            )}
        </section>
      }
    </>
  );
}
