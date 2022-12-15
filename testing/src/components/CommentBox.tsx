import React from "react"
import { CommentSection } from "discussion-box"
import "discussion-box/dist/index.css"
import { useState } from "react"

const CommentBox = () => {
  const [data] = useState([
    {
      userId: "01a",
      comId: "012",
      fullName: "Stanly Mathai",
      avatarUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
      text: "This is why I'm investing in web3 games",
      replies: [
        {
          userId: "02a",
          comId: "013",
          fullName: "Ramachandran Gavarpattu",
          avatarUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
          text: "Good Work team! Let us keep up the momentum 🙌"
        },
        {
          userId: "01a",
          comId: "014",
          fullName: "CryptoTasha",
          avatarUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
          text: "thanks!🥰"
        },
        {
          userId: "01b",
          comId: "015",
          fullName: "Vishvas Nath",
          avatarUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp",
          text: "thanks!🤗"
        },
        {
          userId: "01c",
          comId: "016",
          fullName: "Manjush Shetty",
          avatarUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
          text: "thanks 👍"
        }
      ]
    },
    {
      userId: "02b",
      comId: "017",
      fullName: "Ricardo Landman",
      text: "This lady gets it!!! 😊",
      avatarUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp",
      replies: []
    }
  ])

  return (
    <div style={{ width: "100%" }}>
      <CommentSection
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
          currentUserFullName: "Stanly Mathai"
        }}
        commentData={data}
        currentData={(data: any) => {
          console.log("curent data", data)
        }}
        onSubmitAction={(data: {
          userId: string
          comId: string
          avatarUrl: string
          fullName: string
          text: string
          replies: any
        }) => {
          console.log("check submit, ", data)
        }}
        onReplyAction={(data: {
          userId: string
          repliedToCommentId: string
          avatarUrl: string
          fullName: string
          text: string
        }) => console.log("check reply, ", data)}
        inputStyle={{ border: "1px solid rgb(208 208 208)", color: "red" }}
        submitBtnStyle={{
          fontSize: "12px",
          color: "#1cf399",
          marginRight: "10px",
          borderRadius: "8px",
          backgroundColor: "transparent",
          border: "1px solid rgb(208 208 208)"
        }}
        cancelBtnStyle={{
          fontSize: "12px",
          color: "#f8f8ff",
          borderRadius: "8px",
          backgroundColor: "transparent",
          border: "1px solid rgb(208 208 208)"
        }}
      />
    </div>
  )
}

export default CommentBox
