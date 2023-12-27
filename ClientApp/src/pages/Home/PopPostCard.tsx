import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IForumPost from "../../interfaces/IForumPost";
import { getApiUrl } from "../../utils/getApiUrl";
import profilePicture from "../../assets/profile-icon.svg";


const PopPostCard = () => {
  const [post, setPost] = useState<IForumPost>();

  useEffect(() => {
    fetch(`${getApiUrl()}/forumpost/popular`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setPost(data as IForumPost));
  }, []);

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
      {post == undefined ? (
        <h5 className="">Geen post beschikbaar</h5>
      ) : (
        <Card
          as={Link}
          to="/forum"
          className="shadow-lg text-decoration-none flex-grow-1 bg-antes-primary"
        >
          <Card.Header className="d-flex align-items-center">
            <Link to={`/ profile / ${post.profileID}`} className="poster-pfp">
              <Card.Img src={profilePicture}></Card.Img>
            </Link>
            <span className="d-flex flex-grow-1 justify-content-between align-items-center ms-3">
              <Link
                to={`/profile/${post.profileID}`}
                className="text-decoration-none"
              >
                <h2 className="fs-5 m-0 text-light fw-bolder">
                  {post?.profile?.fullName}
                </h2>
                <h3 className="fs-6 m-0 antes-secondary">
                  lid sinds {post?.profile?.memberSince}
                </h3>
              </Link>
              <span className="">{formattedDate}</span>
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Title as={"h5"} className="fw-bolder">
              {post?.title}
            </Card.Title>
            {post?.content}
            <span className="d-flex gap-2 mt-3">
              {Array.isArray(post?.tags) &&
                post?.tags.map((tag, index) => (
                  <Link to={`/forum?filter=${tag.name}`} key={index}>
                    <Badge pill={true} className="bg-antes-secondary fs-6">{tag.name}</Badge>
                  </Link>
                ))}
            </span>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PopPostCard;
