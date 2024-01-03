import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PopPostCard from "../components/PopPostCard";
import IForumPost from "../../../interfaces/IForumPost";
import ITag from "../../../interfaces/ITag";
import ILike from "../../../interfaces/ILike";
import IReport from "../../../interfaces/IReport";
import { act } from "react-dom/test-utils";

describe("PopPostCard", () => {
  it("renders without crashing", async () => {
    const mockForumPost: IForumPost = {
      title: "",
      time: "",
      content: "",
      tags: [] as ITag[],
      comments: [] as IForumPost[],
      likes: [] as ILike[],
      reports: [] as IReport[],
      profileID: 1,
      forumPostID: null,
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockForumPost),
      })
    );

    const { findByRole } = render(
      <Router>
        <PopPostCard />
      </Router>
    );

    await waitFor(async () => {
      const popPostCard = await findByRole("pop-post-card");
      expect(popPostCard).toBeInTheDocument();
    });
  });
});
