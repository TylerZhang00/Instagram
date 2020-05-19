import React from "react";

import PostImageOne from "../../assets/img/PostOne.JPG";
import PostImageTwo from "../../assets/img/PostTwo.JPG";
import PostImageThree from "../../assets/img/PostThree.JPG";
import ProfilePic from "../../assets/img/StoryYiqi.png";
import LikeIcon from "../../assets/img/Heart.png";
import CommentIcon from "../../assets/img/Comment.png";
import MessageIcon from "../../assets/img/Message.png";
import SaveIcon from "../../assets/img/Save.png";
import {
  PostsContainerDiv,
  PostContainerDiv,
  PostTitleDiv,
  ProfilePictureDiv,
  ProfileNameDiv,
  PostTitleLeft,
  PostImageDiv,
  ProfileSettings,
  PostFooterDiv,
  PostFooterIconDiv,
  PostFooterLeftDiv,
  PostFooterRightDiv,
  PostFooterTextDiv,
  PostFooterLikedByDiv,
  PostFooterCaptionDiv,
  PostFooterViewAllCommentsDiv,
  PostFooterTimeDiv,
  BottomIconImage,
} from "./Home.styles";

const Posts = () => {
  const postContents = [
    {
      username: "zhangyiqi",
      profilePicture: ProfilePic,
      postImage: PostImageTwo,
      likedBy: "banksy and 918 others",
      caption: "immersion",
      totalComments: 17,
      timeStamp: "11 minutes ago",
    },
    {
      username: "zhangyiqi",
      profilePicture: ProfilePic,
      postImage: PostImageOne,
      likedBy: "instagram and 841 others",
      caption: "oh i forgot it's summertime",
      totalComments: 21,
      timeStamp: "2 hours ago",
    },
    {
      username: "zhangyiqi",
      profilePicture: ProfilePic,
      postImage: PostImageThree,
      likedBy: "natgeo and 1039 others",
      caption: "home is canada",
      totalComments: 6,
      timeStamp: "8 hours ago",
    },
  ];

  return (
    <PostsContainerDiv>
      {postContents.map((post) => {
        return (
          <PostContainerDiv>
            <PostTitleDiv>
              <PostTitleLeft>
                <ProfilePictureDiv
                  src={post.profilePicture}
                  alt=""
                ></ProfilePictureDiv>
                <ProfileNameDiv>{post.username}</ProfileNameDiv>
              </PostTitleLeft>
              <ProfileSettings>...</ProfileSettings>
            </PostTitleDiv>

            <PostImageDiv src={post.postImage} alt="" />
            <PostFooterDiv>
              <PostFooterIconDiv>
                <PostFooterLeftDiv>
                  <BottomIconImage src={LikeIcon} alt="" />
                  <BottomIconImage src={CommentIcon} alt="" />
                  <BottomIconImage src={MessageIcon} alt="" />
                </PostFooterLeftDiv>
                <PostFooterRightDiv>
                  <BottomIconImage src={SaveIcon} alt="" />
                </PostFooterRightDiv>
              </PostFooterIconDiv>
              <PostFooterTextDiv>
                <PostFooterLikedByDiv>
                  Liked by {post.likedBy}
                </PostFooterLikedByDiv>
                <PostFooterCaptionDiv>
                  {post.username} {post.caption}
                </PostFooterCaptionDiv>
                <PostFooterViewAllCommentsDiv>
                  View all {post.totalComments} comments
                </PostFooterViewAllCommentsDiv>
                <PostFooterTimeDiv>{post.timeStamp}</PostFooterTimeDiv>
              </PostFooterTextDiv>
            </PostFooterDiv>
          </PostContainerDiv>
        );
      })}
    </PostsContainerDiv>
  );
};

export default Posts;
