import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TagInput from "../components/Post/TagsToevoegen";

describe("TagInput", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TagInput />
      </Router>
    );

    const tagRow = getByRole("tag-row");
    const tagInput = getByRole("tag-input");
    expect(tagRow).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });
});
