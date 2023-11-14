import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import NextActivityCard from "./NextActivityCard";
import IActivity from "./IActivity";
import ActivityCard from "./ActivityCard";

const tempActivity = {
  datetime: "25-12-2023", location: "kalverstraat 33b, amsterdam", name: "kerstviering", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
doloremque dicta dolores nulla suscipit quibusdam magni itaque
blanditiis labore, iusto recusandae rerum delectus provident alias
assumenda commodi ab quisquam!`}

const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();
  const [nextActivity, setNextActivity] = useState<IActivity>();

  function getNextActivity(): IActivity {
    // get next activity
    return {
      datetime: "morgen 13:45", location: "nepstraat 123a, rotterdam", name: "activiteit naam", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
    doloremque dicta dolores nulla suscipit quibusdam magni itaque
    blanditiis labore, iusto recusandae rerum delectus provident alias
    assumenda commodi ab quisquam! Nobis recusandae quos cupiditate
    culpa maxime, incidunt possimus dolorem eveniet reprehenderit
    deleniti ab quisquam asperiores magni ipsum tenetur nam repellendus
    eligendi perferendis magnam? Ab officia ad soluta distinctio aperiam
    maxime! Deserunt exercitationem libero maxime quaerat nobis eaque
    nemo tempore dolor, numquam et minus qui delectus sapiente
    voluptates laudantium! Quidem suscipit, a natus tenetur voluptatem
    impedit nam dolore obcaecati minima cumque? Eligendi, consequuntur
    pariatur provident quia eum placeat perferendis asperiores quo
    dignissimos accusamus temporibus, sunt, enim neque doloremque. Ullam
    quo, obcaecati, voluptatem omnis delectus vero repudiandae
    praesentium earum, ab hic unde! Ab delectus modi illum repellendus
    ad aspernatur corporis quasi. Minus aliquam sapiente harum
    voluptatibus et vitae ratione totam sunt explicabo. Optio iusto
    aliquid officia quo, eveniet quasi alias quisquam animi! Qui,
    voluptatum labore ex assumenda quas voluptates eius mollitia
    veritatis deleniti repellendus autem! Deleniti voluptas quisquam
    officia vero quasi voluptates accusamus natus possimus ratione
    molestias ea pariatur, a soluta quos. Eos nesciunt expedita ab, ea
    incidunt nihil distinctio esse qui modi maxime similique provident
    repudiandae, non earum doloremque dolorem ipsum dicta quis harum
    facilis debitis hic? Molestias ad eligendi debitis! At dolorum fuga
    vero culpa molestiae nesciunt quisquam? Corrupti non delectus quia
    sit eius dignissimos enim a atque cum.`}; // temp dummy
  }

  useEffect(() => {
    // api call for activities
    setActivities(Array(8).fill(tempActivity)) // temp array
    setNextActivity(getNextActivity())

  }, [])

  return (
    <Layout>
      <h1 className="my-5 blue-title">Activiteiten</h1>
      <NextActivityCard activity={nextActivity} />
      <h2 className="mt-5 mb-4">Overige activiteiten</h2>
      <div className="d-flex justify-content-between flex-wrap gap-4">
        {activities?.map((item) => <ActivityCard activity={item} className="flex-grow-1" />)}
      </div>
    </Layout>
  );
};

export default Activities;
