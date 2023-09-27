import { UncontrolledCollapse } from "reactstrap";
import ForumPostExample from "../components/ForumPostExample";
import Layout from "../components/Layout";

import './Forum.scss';

const filterIcon = require("../assets/filter.png");

const Forum = () => {
    return <Layout>
        <span className="forum-header">
            <h1 className="my-5">Antes Forum</h1>
            <div>
                <button className="filter-button" id="toggler">
                    <img className="filter-icon" src={filterIcon} />
                </button>
                <UncontrolledCollapse className="filter-options" toggler="#toggler">
                    <div className="filter-option">Optie 1</div>
                    <div className="filter-option">Optie 2</div>
                    <div className="filter-option">Optie 3</div>
                </UncontrolledCollapse>
            </div>
        </span>
        <ForumPostExample />
        <ForumPostExample />
        <ForumPostExample />
    </Layout>
}

export default Forum;