import ReportIcon from "../../../assets/report.svg";

interface Props {
    onClick: () => void;
}

const ReportButton = ({ onClick }: Props) => {
    const handleReport = () => {
        console.log("report");
        onClick();
    };
    return (
        <img
            src={ReportIcon}
            className="action-icon"
            onClick={handleReport}
        />
    )
}

export default ReportButton