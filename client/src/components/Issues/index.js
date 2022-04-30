import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useHistory } from "react-router-dom"
import { TrashIcon, PencilIcon } from "@heroicons/react/solid"

import { FETCH_ISSUES } from "../../graph/query"
import { DELETE_ISSUE } from "../../graph/mutation"

const Issues = () => {
  const history = useHistory()

  const { loading, error, data } = useQuery(FETCH_ISSUES)

  const [deleteIssue] = useMutation(DELETE_ISSUE, {
    refetchQueries: ["issues"]
  })

  return(
    <div className="w-1/2 m-auto">
      {
        loading ? <div className="w-full text-center mt-8">Loading...</div> : 
        <div className="w-full">
          <div className="w-1/2 m-auto my-5 text-center text-lg font-bold">Issues List</div>
          <div className="w-1/2 m-auto">
            {
              data.issues.map(issue => {
                return(
                  <div 
                    className="px-5 m-3 relative text-blue-900 flex" 
                    key={issue.id}
                  >
                    <div className="w-5/6 text-center rounded-sm border border-blue-500">
                      {issue.title}
                    </div>
                    <div className="w-1/12 text-white flex mx-3"
                      onClick={() => history.push(`/issues/${issue.id}`)} 
                    >
                      <PencilIcon className="h-4 w-4 text-blue-600 justify-center items-center cursor-pointer"/>
                    </div>
                    <div className="w-1/12  flex mx-3 cursor-pointer"
                      onClick={() => deleteIssue({ variables: { id: issue.id } })}
                    >
                      <TrashIcon className="h-4 w-4 text-red-800 justify-center items-center cursor-pointer"/>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Issues