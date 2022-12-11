import React from "react"
import { CommentSection } from "react-comments-section"
import "react-comments-section/dist/index.css"
import { useState } from "react"

const CommentBox = () => {
  const [data] = useState([
    {
      userId: "01a",
      comId: "012",
      fullName: "Stanly Mathai",
      avatarUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
      userProfile: "https://www.linkedin.com/in/",
      text: "This is why I'm investing in web3 games",
      replies: [
        {
          userId: "02a",
          comId: "013",
          // userProfile: 'https://www.linkedin.com/in/',
          fullName: "Ramachandran Gavarpattu",
          avatarUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
          text: "Good Work team! Let us keep up the momentum 🙌"
        },
        {
          userId: "01a",
          comId: "014",
          // userProfile: 'https://www.linkedin.com/in/',
          fullName: "CryptoTasha",
          avatarUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
          text: "thanks!🥰"
        },
        {
          userId: "01b",
          comId: "015",
          // userProfile: 'https://www.linkedin.com/in/',
          fullName: "Vishvas Nath",
          avatarUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp",
          text: "thanks!🤗"
        },
        {
          userId: "01c",
          comId: "016",
          // userProfile: 'https://www.linkedin.com/in/',
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
      // userProfile: 'https://www.linkedin.com/in/',
      text: "This lady gets it!!! 😊",
      avatarUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp",
      replies: []
    }
  ])

  const customNoComment = () => (
    <div className='no-com'>No one has commented yet. </div>
  )
  return (
    <div style={{ width: "100%" }}>
      <CommentSection
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60",
          currentUserProfile: "https://www.linkedin.com/in/",
          currentUserFullName: "Stanly Mathai"
        }}
        hrStyle={{ border: "0.5px solid #ff0072" }}
        titleStyle={{ color: "#f2f2f2" }}
        commentsCount={8}
        commentData={data}
        currentData={(data: any) => {
          console.log("curent data", data)
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/"
        }}
        onSubmitAction={(data: {
          userId: string
          comId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
          replies: any
        }) => console.log("check submit, ", data)}
        onDeleteAction={(data: any) => console.log("comment was deleted", data)}
        onReplyAction={(data: {
          userId: string
          parentOfRepliedCommentId: string
          repliedToCommentId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
        }) => console.log("check reply, ", data)}
        onEditAction={(data: any) => console.log("check edit", data)}
        customNoComment={() => customNoComment()}
        imgStyle={{ borderRadius: "50%" }}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
        inputStyle={{ border: "1px solid rgb(208 208 208)" }}
        formStyle={{ backgroundColor: "white" }}
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
        removeEmoji={true}
        overlayStyle={{ backgroundColor: "#0f0d29", color: "white" }}
        replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
      />
    </div>
  )
}

export default CommentBox
