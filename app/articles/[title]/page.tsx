import React from 'react'

export default function ShowArticlePage(props:any) {
    console.log("Props are: ",props)
  return (
    <div>
      <h1>Show Article</h1>
      <h1>{props.params.title}</h1>
    </div>
  )
}
