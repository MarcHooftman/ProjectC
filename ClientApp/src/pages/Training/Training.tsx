import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import ITraining from "./ITraining";
import TrainingInfoCard from "./TrainingInfoCard";
import "./Training.scss"

const Training = () => {
    const [Trainings, setTraining] = useState<ITraining[]>([]);
    let Category: string[] = []


    useEffect(() => {
        setTraining([{
            ID: 0,
            title: "test_a",
            description: "Testing",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=1EPACJGJznqSgzG2s",
            tags: ["hallo", "iedereen"],
            watchedBy: []
        }, {
            ID: 1,
            title: "test_p",
            description: "Testing",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=1EPACJGJznqSgzG2s",
            tags: ["p", "h"],
            watchedBy: []
        }, {
            ID: 2,
            title: "test_y",
            description: "Testing",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=1EPACJGJznqSgzG2s",
            tags: ["y", "t"],
            watchedBy: []
        }, {
            ID: 3,
            title: "test_x",
            description: "Testing",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=1EPACJGJznqSgzG2s",
            tags: ["x", "z"],
            watchedBy: []
        }, {
            ID: 4,
            title: "test_q",
            description: "kjbkjdadsbbjkasjbdakbdl",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=1EPACJGJznqSgzG2s",
            tags: ["hallo", "iedereen"],
            watchedBy: []
        }])
    }, [])
    // sets category to every first tag of trainings
    Trainings.forEach((i) => { if (!Category.includes(i.tags[0])) Category.push(i.tags[0]) })

    return (
        <Layout>
            {Category.map(i => {
                return <div key={i} className="ps-3">
                    <h3 className="pt-3 blue-text" >{i}</h3>
                    <div className="d-flex pt-3 gap-4 flex-row flex-wrap justify-content-start">
                        {Trainings.map((item) => { if (item.tags.includes(i)) return <TrainingInfoCard key={item.ID} Training={item} /> })}
                    </div>
                </div>
            })}
        </Layout>
    );
};

export default Training;
