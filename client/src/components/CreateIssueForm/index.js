import { useMutation } from "@apollo/client";
import React, { useState } from "react"

import { CREATE_ISSUE } from "../../graph/mutation";


const CreateIssueForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [createIssue, { data, loading, error }] = useMutation(CREATE_ISSUE, {
    variables: {
      title,
      description
    },
    refetchQueries: ["issues"]
  });

  return(
    <div className="w-full">
      <div className="w-1/2 m-auto my-5 text-center text-lg font-bold">Create Issue</div>
      <div className="w-1/2 m-auto">
        <input
          className="w-full border-2 border-blue-400 rounded-md pl-2"
          type="text" 
          name="title" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-1/2 m-auto mt-3">
        <input
          className="w-full border-2 border-blue-400 rounded-md pl-2"
          type="text" 
          name="description" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="w-1/2 m-auto">
        <button 
          className="bg-blue-500 text-center w-full rounded-md text-white mt-3" 
          onClick={createIssue}
        >
            Create
        </button>
      </div>
    </div>
  )
}

export default CreateIssueForm