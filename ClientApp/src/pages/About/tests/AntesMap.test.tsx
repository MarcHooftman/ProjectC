import { render } from "@testing-library/react";
import AntesMap from "../components/AntesMap";

describe("AntesMap", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<AntesMap />);

    // Check if the map iframe is displayed
    const mapIframe = getByRole("map-frame");
    expect(mapIframe).toBeInTheDocument();
  });
});
