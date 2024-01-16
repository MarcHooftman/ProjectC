import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ITraining from "../../../../interfaces/ITraining";
import { getApiUrl } from "../../../../utils/getApiUrl";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { Button, Card } from "react-bootstrap";
import TextInputWithCounter from "../../../../components/TextInputWithCounter";
import TagInput from "../../../../pages/Forum/components/Post/TagsToevoegen";

const AdminEditTrainings = () => {
  const { id } = useParams();
  const [training, setTraining] = useState<ITraining>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${getApiUrl()}/training/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const training = data as ITraining;
        setTraining(training);
        setTitle(training.title);
        setDescription(training.description);
        setUrl(training.url || "");
        setTags(training.tags.map((tag) => tag.name));
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

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

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTraining: ITraining = {
      ...training,
      title: title,
      description: description,
      url: url,
      tags: tags.map((tag) => ({ name: tag })),
    };
    console.log(newTraining);
    fetch(`${getApiUrl()}/training/${newTraining.id}`, {
      method: "PUT",
      headers: {
        "ngrok-skip-browser-warning": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTraining),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `Request failed with status ${response.status}: ${text} `
            );
          });
        }
        // response is empty if succesful
        return response.text();
      })
      .then((_) => navigate("/admin/trainings"))
      .catch((error) => console.error("Error:", error));
  };
  //console.log(tags);
  return (
    <AdminLayout role="admin-edit-training-page">
      <h1 className="my-5 blue-text">Training Bewerken</h1>
      {
        <Card className="shadow-lg">
          <Card.Body>
            <Card.Title>Bewerken</Card.Title>
            <form
              className="d-flex flex-column p-3 gap-2"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Titel"
                className=""
                onChange={onTitleChange}
                value={title}
                role="title-input"
              />
              <TextInputWithCounter
                value={description}
                placeholder="Descriptie"
                maxLength={1000}
                onChange={onDescriptionChange}
              />
              <input placeholder="URL" onChange={onURLChange} value={url} role="url-input" />
              <TagInput
                previousTags={tags}
                onChange={(taglist) => setTags(taglist)}
              />
              <Button className="w-25 mt-4" variant="primary" type="submit" role="submit-button">
                Opslaan
              </Button>
            </form>
          </Card.Body>
        </Card>
      }
    </AdminLayout>
  );
};

export default AdminEditTrainings;
