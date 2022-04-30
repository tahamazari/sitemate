import React from "react"

import CreateIssueForm from "../CreateIssueForm"
import Issues from "../Issues"

const Home = () => {
  return (
    <>
      <CreateIssueForm />
      <Issues />
    </>
  )
}

export default Home