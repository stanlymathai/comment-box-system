import * as React from "react"
import CommentSectionComponent from "./components/CommentSectionComponent/Index"
import GlobalProvider from "./context/Provider"
import "./Index.scss"

interface CommentSectionProps {
  currentUser: {
    currentUserId: string
    currentUserImg: string
    currentUserFullName: string
  } | null
  inputStyle?: object
  formStyle?: object
  submitBtnStyle?: object
  cancelBtnStyle?: object
  replyInputStyle?: object
  onSubmitAction?: Function
  onReplyAction?: Function
  currentData?: Function
  commentData: Array<{
    userId: string
    comId: string
    fullName: string
    avatarUrl: string
    text: string
    replies?:
      | Array<{
          userId: string
          comId: string
          fullName: string
          avatarUrl: string
          text: string
        }>
      | undefined
  }>
}

export const CommentSection = ({
  currentUser,
  inputStyle,
  formStyle,
  submitBtnStyle,
  cancelBtnStyle,
  replyInputStyle,
  commentData,
  onSubmitAction,
  onReplyAction,
  currentData
}: CommentSectionProps) => {
  return (
    <GlobalProvider
      currentUser={currentUser}
      inputStyle={inputStyle}
      formStyle={formStyle}
      submitBtnStyle={submitBtnStyle}
      cancelBtnStyle={cancelBtnStyle}
      replyInputStyle={replyInputStyle}
      commentData={commentData}
      onSubmitAction={onSubmitAction}
      onReplyAction={onReplyAction}
      currentData={currentData}
    >
      <CommentSectionComponent />
    </GlobalProvider>
  )
}
