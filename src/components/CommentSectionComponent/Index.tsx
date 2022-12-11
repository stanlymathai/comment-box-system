import CommentStructure from "../CommentStructure.tsx/Index"
import InputField from "../InputField/Index"
import "./CommentSection.css"
import { useContext } from "react"
import { GlobalContext } from "../../context/Provider"
import _ from "lodash"
import React from "react"
import LoginSection from "../LoginSection/LoginSection"
import NoComments from "./NoComments"

interface CommentSectionProps {
  overlayStyle?: object
  logIn: {
    loginLink: string
    signupLink: string
  }
  hrStyle?: object
  titleStyle?: object
  customNoComment?: Function
}

const CommentSection = ({
  overlayStyle,
  logIn,
  // hrStyle,
  titleStyle,
  customNoComment
}: CommentSectionProps) => {
  const loginMode = () => {
    return (
      <LoginSection
        loginLink={logIn!.loginLink}
        signUpLink={logIn!.signupLink}
      />
    )
  }
  const globalStore: any = useContext(GlobalContext)

  const totalComments = () => {
    let count = 0
    globalStore.data.map((i: any) => {
      count = count + 1
      i.replies.map(() => (count = count + 1))
    })
    return count
  }

  return (
    <div
      className='overlay'
      style={{ ...overlayStyle, background: "#1a1a2b", padding: "10px" }}
    >
      <p className='comment-title_' style={{ ...titleStyle, fontSize: "14px" }}>
        {globalStore.commentsCount || totalComments()}{" "}
        {totalComments() === 1 ? "Comment" : "Comments"}
      </p>

      {globalStore.data.length > 0 ? (
        globalStore.data.map(
          (i: {
            userId: string
            comId: string
            fullName: string
            avatarUrl: string
            text: string
            userProfile?: string
            replies: Array<any> | undefined
          }) => {
            return (
              <div key={i.comId}>
                <CommentStructure
                  info={i}
                  replyMode={
                    _.indexOf(globalStore.replyArr, i.comId) === -1
                      ? false
                      : true
                  }
                  logIn={logIn}
                />
                {i.replies &&
                  i.replies.length > 0 &&
                  i.replies.map((j) => {
                    return (
                      <div className='replySection' key={j.comId}>
                        <CommentStructure
                          info={{ ...j, replyComponent: true }}
                          parentId={i.comId}
                          replyMode={
                            _.indexOf(globalStore.replyArr, j.comId) === -1
                              ? false
                              : true
                          }
                          logIn={logIn}
                        />
                      </div>
                    )
                  })}
              </div>
            )
          }
        )
      ) : customNoComment ? (
        customNoComment()
      ) : (
        <NoComments />
      )}
      {globalStore.currentUserData === null ? (
        loginMode()
      ) : (
        <InputField
          formStyle={{ margin: "10px 10px", background: "red" }}
          imgDiv={{ margin: 0 }}
        />
      )}
    </div>
  )
}

export default CommentSection
