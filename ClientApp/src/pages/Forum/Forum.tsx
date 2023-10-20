import ForumPostCard from "./ForumPostCard";
import Layout from "../../components/Layout";
import FilterDropdown from "./FilterDropdown";
import { useSearchParams } from "react-router-dom";

import "./Forum.scss";

const Forum = () => {
  const [searchParams,] = useSearchParams()
  const filter = searchParams.get('filter')
  return (
    <Layout>
      <span className="forum-header d-flex justify-content-between align-items-center">
        <h1 className="my-5">Antes Forum</h1>
        <FilterDropdown />
      </span>
      <ForumPostCard />
      <ForumPostCard />
      <ForumPostCard />
      <ForumPostCard />
    </Layout>
  );
};

export default Forum;
