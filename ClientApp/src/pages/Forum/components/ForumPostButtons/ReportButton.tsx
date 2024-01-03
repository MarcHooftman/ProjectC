import { useEffect, useState } from "react";
import ReportIcon from "../../../../assets/report.svg";
import ReportFillIcon from "../../../../assets/report-fill.svg";
import { Button, Form, Modal } from "react-bootstrap";
import IReport from "../../../../interfaces/IReport";
import IForumPost from "../../../../interfaces/IForumPost";
import { getApiUrl } from "../../../../utils/getApiUrl";

interface Props {
  postId: number;
  profileId: number;
  onClick?: () => void;
  onSubmit?: () => void;
}

const ReportButton = ({
  postId,
  profileId,
  onClick = () => {},
  onSubmit = () => {},
}: Props) => {
  const [reported, setReported] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false);
  const [otherInputValue, setOtherInputValue] = useState<string>("");
  const [spamChecked, setSpamChecked] = useState<boolean>(false);
  const [inappropriateContentChecked, setInappropriateContentChecked] =
    useState<boolean>(false);
  const [nonWorkRelatedChecked, setNonWorkRelatedChecked] =
    useState<boolean>(false);

  const handleReport = () => {
    if (!reported) {
      setShowModal(!showModal);
    }
    onClick();
  };

  const refreshReported = () => {
    fetch(`${getApiUrl()}/forumpost/${postId}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const post = data as IForumPost;
        setReported(
          post.reports?.some((report) => report.profileID == profileId)
        );
      });
  };

  useEffect(() => {
    refreshReported();
  }, [postId, profileId]);

  const resetForm = () => {
    setSpamChecked(false);
    setInappropriateContentChecked(false);
    setNonWorkRelatedChecked(false);
    setOtherInputValue("");
    setShowOtherInput(false);
  };

  const handleOtherCheckedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOtherInput(event.target.checked);
    setOtherInputValue("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const report: IReport = {
      forumPostID: postId,
      profileID: profileId,
      spam: spamChecked,
      inappropriate: inappropriateContentChecked,
      notWorkRelated: nonWorkRelatedChecked,
      other: showOtherInput,
      elaboration: otherInputValue,
    };

    fetch(`${getApiUrl()}/report`, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    }).then((_) => {
      refreshReported();
      onSubmit();
      setShowModal(false);

      // delay reset to allow modal transition to finish
      setTimeout(() => resetForm(), 100);
    });
  };

  return (
    <>
      <Modal
        show={showModal}
        centered={true}
        size="sm"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Rapporteren</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Wat is de reden van rapporteren?</h6>
          <Form onSubmit={handleFormSubmit}>
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                checked={spamChecked}
                onChange={(event) => setSpamChecked(event.target.checked)}
              />
              <Form.Check.Label>Het is spam</Form.Check.Label>
            </Form.Check>
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                checked={inappropriateContentChecked}
                onChange={(event) =>
                  setInappropriateContentChecked(event.target.checked)
                }
              />
              <Form.Check.Label>Ongepaste inhoud</Form.Check.Label>
            </Form.Check>
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                checked={nonWorkRelatedChecked}
                onChange={(event) =>
                  setNonWorkRelatedChecked(event.target.checked)
                }
              />
              <Form.Check.Label>Niet werk-gerelateerd</Form.Check.Label>
            </Form.Check>
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                id="other"
                onChange={(event) => handleOtherCheckedChange(event)}
              />
              <Form.Check.Label>Anders</Form.Check.Label>
              {showOtherInput && (
                <Form.Control
                  type="text"
                  placeholder="Toelichting"
                  value={otherInputValue}
                  onChange={(event) => setOtherInputValue(event.target.value)}
                />
              )}
            </Form.Check>
            <Button variant="primary" type="submit" className="mt-2">
              Verstuur
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <img
        src={reported ? ReportFillIcon : ReportIcon}
        className={`action-icon ${reported ? "reported" : ""}`}
        onClick={handleReport}
        role="report-button"
      />
    </>
  );
};

export default ReportButton;
