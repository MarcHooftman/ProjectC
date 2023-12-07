import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITraining from "../../interfaces/ITraining";
import TrainingInfoCard from "./TrainingInfoCard";
import "./Training.scss"
import ITag from "../../interfaces/ITag";
import { filterByTag } from "../../utils/sortTraining";
import FilterDropdown from "../../components/FilterDropdown";

const Training = () => {
    const [Trainings, setTraining] = useState<ITraining[]>([]);
    const [searchParams] = useSearchParams()
    const filter = searchParams.get('filter')
    let Category: ITag[] = []


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/training`)
          .then((response) => response.json())
          .then((data) => setTraining(data as ITraining[]));
      }, [filter]);

    const filterTraining = (training: ITraining[]) => {
    training = filter ? filterByTag(training, filter) : training;
    return training;
    };

    // sets category to every first tag of trainings
    filterTraining(Trainings)?.forEach((i) => { if (!Category.some(_ => _.name.includes(i.tags[0].name))) Category.push(i.tags[0]) })

    return (
        <Layout>
            <span className="forum-header d-flex justify-content-between align-items-center">
                <h1 className="my-5 blue-text">Antes Trainingen</h1>
                <FilterDropdown page={"training"}/>
            </span>
            {filterTraining(Trainings).length > 0 ? Category.map(i => {
                return <div key={i.id} className="ps-3">
                    <h3 className="pt-3 blue-text" >{i.name}</h3>
                    <div className="d-flex pt-3 gap-4 flex-row flex-wrap justify-content-start">
                        {filterTraining(Trainings).map((item) => { if (item.tags.some(t => t.name.includes(i.name))) return <TrainingInfoCard key={item.ID} Training={item} /> })}
                    </div>
                </div>
            }) : <h4 className="blue-text opacity-75">Er zijn hier nog geen trainingen...</h4>}
        </Layout>
    );
};

export default Training;
