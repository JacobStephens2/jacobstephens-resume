import React from "react"
import Seo from "../components/seo"

const NotFoundPage = () => {

  return (
	  <div>
      <Seo
        title="404: Not found"
      />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	  </div>
  )
}

export default NotFoundPage
