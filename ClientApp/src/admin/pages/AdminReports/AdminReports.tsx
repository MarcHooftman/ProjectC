import { useEffect, useState } from "react";
import IReport from "../../../interfaces/IReport";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Table, Card, Modal, Button } from "react-bootstrap";
import IForumPost from "../../../interfaces/IForumPost";
import AdminForumPostCard from "../AdminForum/AdminForumPostCard";
import "./AdminReports.scss";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../../utils/isAdmin";
import { getApiUrl } from "../../../utils/getApiUrl";

const AdminReports = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);
  const [reports, setReports] = useState<IReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<IReport | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const refreshReports = () => {
    fetch(`${getApiUrl()}/report`,
      {
        headers: {
          "ngrok-skip-browser-warning": "1",
        }
      },)
      .then((response) => response.json())
      .then((data) => setReports(data as IReport[]));
  };

  const [selectedReportPost, setSelectedReportPost] = useState<IForumPost>();
  useEffect(() => {
    if (selectedReport) {
      fetch(
        `${getApiUrl()}/forumpost/${selectedReport.forumPostID}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "1",
          }
        },
      )
        .then((response) => response.json())
        .then((data) => setSelectedReportPost(data));
    }
  }, [selectedReport]);

  useEffect(() => {
    refreshReports();
  }, []);

  const handleReportClick = (report: IReport) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedReport(null);
    setShowModal(false);
  };

  const handleDeletePost = () => {
    console.log(selectedReportPost);
    if (selectedReportPost?.id) {
      fetch(
        `${getApiUrl()}/forumpost/${selectedReportPost.id}`,
        {

          headers: {
            "ngrok-skip-browser-warning": "1",

          },
          method: "DELETE",
        }
      ).then(() => {
        refreshReports();
        handleCloseModal();
      });
    }
  };

  const handleDismissReport = () => {
    if (selectedReport) {
      fetch(`${getApiUrl()}/report/${selectedReport.id}`, {

        headers: {
          "ngrok-skip-browser-warning": "1",

        },
        method: "DELETE",
      }).then(() => {
        refreshReports();
        handleCloseModal();
      });
    }
  };

  return (
    <>
      <AdminLayout>
        <h1 className="my-5 blue-text">Alle Reports</h1>
        <Card className="shadow-lg">
          <Card.Body>
            {reports.length > 0 ? (
              <Table striped={true} borderless={true} responsive={true}>
                <thead>
                  <tr>
                    <th className="blue-text">Post/Comment ID</th>
                    <th className="blue-text">Spam</th>
                    <th className="blue-text">Ongepast</th>
                    <th className="blue-text">Niet werk gerelateerd</th>
                    <th className="blue-text">Anders</th>
                    <th className="blue-text">Toelichting</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr
                      key={report.id}
                      onClick={() => handleReportClick(report)}
                      className="hover-pointer"
                    >
                      <td className="blue-text">{report.forumPostID}</td>
                      <td className="blue-text">
                        {report.spam ? "Ja" : "Nee"}
                      </td>
                      <td className="blue-text">
                        {report.inappropriate ? "Ja" : "Nee"}
                      </td>
                      <td className="blue-text">
                        {report.notWorkRelated ? "Ja" : "Nee"}
                      </td>
                      <td className="blue-text">
                        {report.other ? "Ja" : "Nee"}
                      </td>
                      <td className="blue-text">{report.elaboration}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <h5 className="text-dark opacity-50">
                Er zijn geen reports op dit moment
              </h5>
            )}
          </Card.Body>
        </Card>
      </AdminLayout>

      <Modal
        centered={true}
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="post-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Report Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReport && (
            <div className="modal-body-container">
              {selectedReportPost && (
                <AdminForumPostCard
                  post={selectedReportPost}
                  onDelete={refreshReports}
                />
              )}
              {selectedReportPost?.forumPostID && (
                <p className="text-danger">Dit is een comment, geen post</p>
              )}
              <Table className="w-25">
                <tr>
                  <th>Spam</th>
                  <td>{selectedReport.spam ? "Ja" : "Nee"}</td>
                </tr>
                <tr>
                  <th>Ongepast</th>
                  <td>{selectedReport.inappropriate ? "Ja" : "Nee"}</td>
                </tr>
                <tr>
                  <th>Niet werk gerelateerd</th>
                  <td>{selectedReport.notWorkRelated ? "Ja" : "Nee"}</td>
                </tr>
                <tr>
                  <th>Anders</th>
                  <td>{selectedReport.other ? "Ja" : "Nee"}</td>
                </tr>
                <tr>
                  <th>Toelichting</th>
                  <td>{selectedReport.elaboration || "-"}</td>
                </tr>
              </Table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Sluiten
          </Button>
          <Button variant="danger" onClick={handleDeletePost}>
            Post verwijderen
          </Button>
          <Button onClick={handleDismissReport}>Report afwijzen</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminReports;
