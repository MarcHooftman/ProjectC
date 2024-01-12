import { render } from "@testing-library/react";
import GeneralInfoCard from "../components/GeneralInfoCard";

describe("GeneralInfoCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<GeneralInfoCard />);

    // Check if the map iframe is displayed
    const generalInfoCard = getByRole("general-info-card");
    expect(generalInfoCard).toBeInTheDocument();
  });
});
