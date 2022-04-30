import React, { useState, useEffect } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { FETCH_ISSUE } from "../../graph/query"
import { UPDATE_ISSUE } from "../../graph/mutation"

const Issue = () => {
  const { id } = useParams()
  const history = useHistory()
  const [title_, setTitle] = useState('');
  const [description_, setDescription] = useState('');

  const { data, loading, error } = useQuery(FETCH_ISSUE, {
    variables: {
      id: parseInt(id)
    }
  })
  
  useEffect(() => {
    setTitle(data?.issue.title)
    setDescription(data?.issue.description)
  }, [data])

  const [updateIssue] = useMutation(UPDATE_ISSUE, {
    variables: {
      id: parseInt(id),
      title: title_,
      description: description_
    },
    onCompleted: (data) => {
      if(data.updateIssue.success) {
        history.push("/")
      }
    }
  });

  return (
    <div className="w-1/2 m-auto">
      {
        loading ? <div className="w-full mt-10 text-center">Loading...</div> : 
        <>
          <div className="w-1/2 m-auto my-5 text-center text-lg font-bold">Update Issue</div>
            <div className="w-1/2 m-auto">
              <input
                className="w-full border-2 border-blue-400 rounded-md pl-2"
                type="text" 
                name="title" 
                placeholder="Title" 
                value={title_}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-1/2 m-auto mt-3">
              <input
                className="w-full border-2 border-blue-400 rounded-md pl-2"
                type="text" 
                name="description" 
                placeholder="Description" 
                value={description_} 
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-1/2 m-auto">
              <button 
                className="bg-blue-500 text-center w-full rounded-md text-white mt-3" 
                onClick={() => {
                  if(title_ && description_) {
                    updateIssue()
                  }
                  else{ 
                    alert("Please fill all the fields")
                  }
                }
                }>
                  Update
                </button>
            </div>
        </>
      }
    </div>
  )
}

export default Issue