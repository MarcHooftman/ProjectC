import "./Post.scss";
import Layout from "../../../components/Layout";
import { Button, Card } from "react-bootstrap";
import TextInputWithCounter from "../../../components/TextInputWithCounter";
import TagInput from "./TagsToevoegen";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IProfile from "../../../interfaces/IProfile";
import useGraphData from "../../../hooks/useGraphData";
import IForumPost from "../../../interfaces/IForumPost";
import CustomAuthenticatedTemplate from "../../../components/AuthTemplates/CustomAuthenticatedTemplate";
import { getApiUrl } from "../../../utils/getApiUrl";

const Post = () => {
  const isTemporaryUser = localStorage.getItem("temporaryUser") !== null;
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    if (graphData) {
      fetch(
        `${getApiUrl()}/profile/by-email/${graphData?.mail}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "1",
          }
        },
      )
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!profile?.id) {
      // Handle case where profile is not available
      console.error("Profile ID not available");
      return;
    }

    const postObject: IForumPost = {
      title: title,
      content: content,
      tags: tags.map((tag) => ({ name: tag })),
      profileID: profile.id,
      time: new Date().toISOString(),
      forumPostID: null,
      comments: [],
      likes: [],
      reports: [],
    };

    fetch(`${getApiUrl()}/forumpost`, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObject),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post submitted successfully");
        } else {
          console.error("Failed to submit post");
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error("Error submitting post:", error);
      });
    setTimeout(() => navigate("/forum"), 250);
  };

  return (
    <Layout>
      <h1 className="my-5 blue-text fw-bolder">Post plaatsen</h1>
      <CustomAuthenticatedTemplate>
        {isTemporaryUser
          ? <p className="blue-text">{"Als tijdelijke gebruiker kun je nog geen posts plaatsen :("}</p>
          : <Card className="shadow-lg bg-antes-primary">
            <Card.Body className="p-4">
              <Card.Title as="h3">Nieuw bericht</Card.Title>
              <form
                className="d-flex flex-column py-3 gap-2"
                onSubmit={handleSubmit}
              >
                <input placeholder="Titel" className="" onChange={onTitleChange} />
                <TextInputWithCounter maxLength={300} onChange={onContentChange} />
                <TagInput onChange={(taglist) => setTags(taglist)} />
                <Button className="mt-4 fw-bold post-button" variant="primary" type="submit">
                  Post
                </Button>
              </form>
            </Card.Body>
          </Card>
        }

      </CustomAuthenticatedTemplate>
    </Layout>
  );
};

export default Post;
