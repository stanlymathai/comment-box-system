import "./CommentStructure.scss"
import { useContext } from "react"
import { GlobalContext } from "../../context/Provider"
import InputField from "../InputField/Index"
import { Menu, MenuItem } from "@szhsin/react-menu"
import "@szhsin/react-menu/dist/index.css"
import "@szhsin/react-menu/dist/transitions/slide.css"
import React from "react"

interface CommentStructureProps {
  info: {
    userId: string
    comId: string
    fullName: string
    avatarUrl: string
    text: string
    userProfile?: string
    replies?: Array<object> | undefined
    replyComponent?: boolean | undefined
  }
  parentId?: string
  replyMode: boolean
  logIn: {
    loginLink: string
    signupLink: string
  }
}

const CommentStructure = ({
  info,
  parentId,
  replyMode
}: CommentStructureProps) => {
  const globalStore: any = useContext(GlobalContext)
  const currentUser = globalStore.currentUserData

  const userInfo = () => {
    return (
      <div className='commentsTwo'>
        <a className='userLink' target='_blank' href={info.userProfile}>
          <div>
            <img
              src={info.avatarUrl}
              alt='userIcon'
              className='imgdefault'
              style={
                globalStore.imgStyle || {
                  position: "relative",
                  borderRadius: "50%",
                  top: 7
                }
              }
            />
          </div>
          <div className='fullName'>{info.fullName} </div>
        </a>
      </div>
    )
  }

  const likeButton = () => {
    let hasThumbsUp = Math.random() < 0.5
    let hasBrilliant = Math.random() < 0.5
    let hasThoughtFul = Math.random() < 0.5

    return (
      <div className='likeBtn'>
        <span>
          <Menu
            menuButton={<button className='likeBtn'>Like</button>}
            position={"anchor"}
            viewScroll={"auto"}
            direction={"top"}
            align={"center"}
            arrow={true}
            transition
          >
            <MenuItem>
              <span
                // title='Thumbs Up'
                className={
                  hasThumbsUp
                    ? "emoji-selected emoji-blue"
                    : "emoji-un-selected emoji-blue"
                }
              >
                &#128077;
              </span>
              <span
                // title='Brilliant'
                className={
                  hasBrilliant ? "emoji-selected" : "emoji-un-selected"
                }
              >
                &#128161;
              </span>
              <span
                // title='Thoughtful'
                className={
                  hasThoughtFul ? "emoji-selected" : "emoji-un-selected"
                }
              >
                &#129300;
              </span>
            </MenuItem>
          </Menu>
        </span>
      </div>
    )
  }

  const reactionOverview = () => {
    let reactionCount = Math.floor(Math.random() * 9 + 1) + "K"
    return (
      <button className='reactionGroup'>
        <span className='emoji-blue'>&#128077;</span>
        <span>&#128161;</span>
        <span>&#129300;</span>
        <span className='user-action-text'>{reactionCount}</span>
      </button>
    )
  }

  const replyButton = () => {
    let myArray = ["s", "m", "h", "months"]
    var rand = myArray[~~(Math.random() * myArray.length)]
    let timeFromNow = Math.floor(Math.random() * 9 + 1) + `${rand}`

    return (
      <div style={info.replyComponent ? { visibility: "hidden" } : {}}>
        <span className='vertical-line' />
        <button
          className='replyBtn'
          onClick={() => globalStore.handleAction(info.comId, false)}
        >
          <span>Reply</span>
          <span className='user-action-text'>{timeFromNow}</span>
        </button>
      </div>
    )
  }

  const replySection = () => {
    return (
      <div className='halfDiv'>
        <div className='userInfo'>
          {userInfo()}
          <div className='infoStyle'>{info.text}</div>
          {currentUser && (
            <div className='actionDiv'>
              <div className='halfDiv'>
                {likeButton()}
                {reactionOverview()}
                {replyButton()}
              </div>
              <div className='flagBtn' />
            </div>
          )}
        </div>
      </div>
    )
  }

  const actionModeSection = () => {
    return (
      <div className='replysection'>
        {replySection()}
        <InputField
          formStyle={{
            backgroundColor: "transparent",
            padding: "20px 0px",
            marginLeft: "-15px"
          }}
          comId={info.comId}
          fillerText={""}
          mode={"replyMode"}
          parentId={parentId}
        />
      </div>
    )
  }

  return (
    <div className='comment-structure'>
      {replyMode ? actionModeSection() : replySection()}
    </div>
  )
}

export default CommentStructure
