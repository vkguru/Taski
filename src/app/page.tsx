"use client"

import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import NoTask from "@/components/NoTask";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [searchResult, setSearchResult] = useState(false);
  const [hasTask, setHasTask] = useState(false);
  const [taskMessage, setTaskMessage] = useState("You have no task listed");
  const [welcomeMessage, setWelcomeMessage] = useState("Create tasks to achieve more.");
  const [userName, setUserName] = useState("John")

  const creatTask = () => {
    setHasTask(true)
  }

  return (
    <>
      <Welcome 
        name={userName} 
        subtext={welcomeMessage} 
      />
      {!hasTask?
        <NoTask 
          message={taskMessage}
          result={searchResult}
          onClick={creatTask}
        />
        :
        <TaskList />
      }
    </>
  );
}
