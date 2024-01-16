import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import IActivity from "../../../interfaces/IActivity";
import ITraining from "../../../interfaces/ITraining";
import IForumPost from "../../../interfaces/IForumPost";
import ITag from "../../../interfaces/ITag";
import ILike from "../../../interfaces/ILike";
import IReport from "../../../interfaces/IReport";
import NextActivityCard from "../components/NextActivityCard";
import NextTrainingCard from "../components/NextTrainingCard";
import PopPostCard from "../components/PopPostCard";

const mockActivity: IActivity = {
  title: "",
  description: "",
  location: "",
  time: "",
};

const mockTrainings: ITraining[] = [
  {
    title: "",
    description: "",
    url: "",
    tags: [],
  },
];

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

describe("NextActivityCard", () => {
  it("renders without crashing", () => {
    render(<Router><Home /></Router>);
  });

  it("displays the home-page", () => {
    const { getByRole } = render(<Router><Home /></Router>);
    const home = getByRole("home-page");
    expect(home).toBeInTheDocument();
  });

  it("displays the next-activity-card", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockActivity),
      })
    );
    const { findByRole } = render(<Router><NextActivityCard /></Router>);
    await waitFor(async () => {
      const nextActivityCard = await findByRole("next-activity-card");
      expect(nextActivityCard).toBeInTheDocument();
    });
  });

  it("displays the next-training-card", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockTrainings),
      })
    );
    const { findByRole } = render(<Router><NextTrainingCard /></Router>);
    await waitFor(async () => {
      const nextTrainingCard = await findByRole("next-training-card");
      expect(nextTrainingCard).toBeInTheDocument();
    });
  });

  it("displays the pop-post-card", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockForumPost),
      })
    );
    const { findByRole } = render(<Router><PopPostCard /></Router>);
    await waitFor(async () => {
      const popPostCard = await findByRole("pop-post-card");
      expect(popPostCard).toBeInTheDocument();
    });
  });

});
