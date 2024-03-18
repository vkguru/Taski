"use client"

import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import NoTask from "@/components/NoTask";

export default function Home() {
  const [searchResult, setSearchResult] = useState(false);
  const [taskMessage, setTaskMessage] = useState("You have no task listed");

  return (
    <>
      <Welcome 
        name="John" 
        subtext="Create tasks to achieve more." 
      />
      <NoTask 
        message={taskMessage}
        result={searchResult}
      />
    </>
  );
}
