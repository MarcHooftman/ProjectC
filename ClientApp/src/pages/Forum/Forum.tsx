import { UncontrolledCollapse } from "reactstrap";
import ForumPostExample from "../../components/ForumPostExample";
import Layout from "../../components/Layout";

import "./Forum.scss";

const filterIcon = require("../../assets/filter.png");

const Forum = () => {
  return (
    <Layout>
      <span className="forum-header d-flex justify-content-between align-items-center">
        <h1 className="my-5">Antes Forum</h1>
        <details className="filter">
          <summary>
            <img className="filter-icon" src={filterIcon} />
          </summary>
          <div className="filter-options">
            <div className="filter-option">No filter</div>
            <div className="filter-option">Optie 1</div>
            <div className="filter-option">Optie 2</div>
            <div className="filter-option">Optie 3</div>
          </div>
        </details>
      </span>
      <ForumPostExample />
      <ForumPostExample />
      <ForumPostExample />
      <ForumPostExample />
    </Layout>
  );
};

export default Forum;
