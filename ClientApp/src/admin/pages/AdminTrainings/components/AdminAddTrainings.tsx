import ITraining from "../../../../interfaces/ITraining";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import TagInput from "../../../../pages/Forum/components/Post/TagsToevoegen";
import TextInputWithCounter from "../../../../components/TextInputWithCounter";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { getApiUrl } from "../../../../utils/getApiUrl";

const AdminAddTrainings = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (!profile?.id) {
    //   // Handle case where profile is not available
    //   console.error("Profile ID not available");
    //   return;
    // }

    const postObject: ITraining = {
      title: title,
      description: description,
      tags: tags.map((tag) => ({ name: tag })),
      url: url,
    };

    fetch(`${getApiUrl()}/training`, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObject),
    })
      .then((response) => {
        if (response.ok) {
          console.log("training submitted successfully");
        } else {
          console.error("Failed to submit training");
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error("Error submitting post:", error);
      });
    setTimeout(() => navigate("/admin/trainings"), 250);
  };

  return (
    <AdminLayout role="admin-add-training-page">
      <h1 className="my-5 blue-text">Training aanmaken</h1>
      {
        <Card className="shadow-lg">
          <Card.Body>
            <Card.Title>Nieuwe Training</Card.Title>
            <form
              className="d-flex flex-column p-3 gap-2"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Titel"
                className=""
                onChange={onTitleChange}
                role="title-input"
              />
              <TextInputWithCounter
                placeholder="Beschrijving"
                maxLength={1000}
                onChange={onDescriptionChange}
              />
              <input placeholder="URL" onChange={onURLChange} role="url-input" />
              <TagInput onChange={(taglist) => setTags(taglist)}/>
              <Button className="w-25 mt-4" variant="primary" type="submit" role="submit-button">
                Plaats
              </Button>
            </form>
          </Card.Body>
        </Card>
      }
    </AdminLayout>
  );
};

export default AdminAddTrainings;
