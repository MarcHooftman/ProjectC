import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITraining from "../../interfaces/ITraining";
import TrainingInfoCard from "./TrainingInfoCard";
import "./Training.scss"
import ITag from "../../interfaces/ITag";
import { filterByTag } from "../../utils/sortTraining";
import FilterDropdown from "../../components/FilterDropdown";
import useGraphData from "../../hooks/useGraphData";
import IProfile from "../../interfaces/IProfile";
import { AuthenticatedTemplate } from "@azure/msal-react";

const Training = () => {

    const [profile, setProfile] = useState<IProfile>();
    const [Trainings, setTraining] = useState<ITraining[]>([]);
    const [searchParams] = useSearchParams()
    const filter = searchParams.get('filter')
    let Category: ITag[] = []
    const { graphData } = useGraphData();
    console.log(graphData)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/training`)
            .then((response) => response.json())
            .then((data) => setTraining(data as ITraining[]));

    }, [filter]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [graphData]);

    const filterTraining = (training: ITraining[]) => {
        training = filter ? filterByTag(training, filter) : training;
        return training;
    };

    // sets category to every first tag of trainings
    filterTraining(Trainings)?.forEach((i) => { if (!Category.some(_ => _.name.includes(i.tags[0].name))) Category.push(i.tags[0]) })

    return (
        <Layout>
            <AuthenticatedTemplate>
                <span className="forum-header d-flex justify-content-between align-items-center">
                    <h1 className="my-5 blue-text">Antes Trainingen</h1>
                    <FilterDropdown page={"training"} />
                </span>
                {profile && filterTraining(Trainings).length > 0 ? Category.map((i, index) => {
                    return <div key={index} className="ps-3">
                        <h3 className="pt-3 blue-text" >{i.name}</h3>
                        <div className="d-flex pt-3 gap-4 flex-row flex-wrap justify-content-start">
                            {filterTraining(Trainings).map((item, itemIndex) => {
                                if (item.tags.some(t => t.name.includes(i.name))) {
                                    return <TrainingInfoCard key={itemIndex} Training={item}
                                        Completed={item.profile.some(_ => _.email.includes(profile!.email))} />
                                }
                                return null;
                            })}
                        </div>
                    </div>
                }) : <h4 className="blue-text opacity-75">Er zijn hier nog geen trainingen...</h4>}
            </AuthenticatedTemplate>
        </Layout>
    );
};

export default Training;
