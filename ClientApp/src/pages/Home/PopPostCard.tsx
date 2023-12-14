import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import IForumPost from "../../interfaces/IForumPost";

const profilePicture = require("../../assets/profile.png");

const PopPostCard = () => {
  const [post, setPost] = useState<IForumPost>();

  const { loading, data } = useFetch(
    `${process.env.REACT_APP_API_URL}/forumpost/popular`
  );
  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [loading]);

  let formattedDate;

  if (post?.time !== undefined) {
    const postDate = new Date(post.time);
    const currentDate = new Date();

    if (
      postDate.getDate() === currentDate.getDate() &&
      postDate.getMonth() === currentDate.getMonth() &&
      postDate.getFullYear() === currentDate.getFullYear()
    ) {
      // Show only time if the date is today
      formattedDate = postDate.toLocaleTimeString("nl-NL", {
        hour: "numeric",
        minute: "numeric",
      });
    } else {
      // Show date and time in short format
      formattedDate = postDate.toLocaleString("nl-NL", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    }
  }

  return (
    <>
      {post == undefined
        ? <h5 className="text-dark opacity-50">Geen post beschikbaar</h5>
        : <Card as={Link} to="/forum" className="shadow-lg text-decoration-none flex-grow-1">
          <Card.Header className="d-flex align-items-center">
            <Link to={`/profile/${post.profileID}`} className="poster-pfp">
              <Card.Img src={profilePicture}></Card.Img>
            </Link>
            <span className="d-flex flex-grow-1 justify-content-between align-items-center ms-3">
              <Link to={`/profile/${post.profileID}`} className="text-decoration-none blue-text">
                <h2 className="fs-5 m-0">
                  <strong>{post?.profile?.fullName}</strong>
                </h2>
                <h3 className="fs-6 m-0 opacity-50 text-dark">
                  lid sinds {post?.profile?.memberSince}
                </h3>
              </Link>
              <span className="opacity-50 text-dark">{formattedDate}</span>
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Title as={"h5"}>{post?.title}</Card.Title>
            {post?.content}
            <span className="d-flex gap-2 mt-2">
              {Array.isArray(post?.tags) &&
                post?.tags.map((tag) => (
                  <Link to={`/forum?filter=${tag.name}`} key={tag.id}>
                    <Badge pill={true}>{tag.name}</Badge>
                  </Link>
                ))}
            </span>
          </Card.Body>
        </Card>}
    </>
  );
};

export default PopPostCard;
