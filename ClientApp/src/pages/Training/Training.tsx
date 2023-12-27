import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITraining from "../../interfaces/ITraining";
import TrainingInfoCard from "./TrainingInfoCard";
import "./Training.scss"
import ITag from "../../interfaces/ITag";
import FilterDropdown from "../../components/FilterDropdown";
import useGraphData from "../../hooks/useGraphData";
import IProfile from "../../interfaces/IProfile";
import CustomAuthenticatedTemplate from "../../components/AuthTemplates/CustomAuthenticatedTemplate";
import { getApiUrl } from "../../utils/getApiUrl";
import { filterData } from "../../utils/sortTraining";
import { Card } from "react-bootstrap";

const Training = () => {

    const [profile, setProfile] = useState<IProfile>();
    const [Trainings, setTraining] = useState<ITraining[]>([]);
    const [searchParams] = useSearchParams()
    const filter = searchParams.get('filter') || ""
    let Category: ITag[] = []
    const { graphData } = useGraphData();

    useEffect(() => {
        fetch(`${getApiUrl()}/training`,
            {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                }
            },)
            .then((response) => response.json())
            .then((data) => setTraining(data as ITraining[]))
    }, [filter]);

    useEffect(() => {
        if (graphData?.mail === undefined) return;
        fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`,
            {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                }
            },)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [graphData]);

    const filterTraining = (training: ITraining[]) => {
        training = filter ? filterData(training, filter) : training;
        return training;
    };

    // sets category to every first tag of trainings
    filterTraining(Trainings)?.forEach((i) => { if (i.tags.length === 0) Category.push({name: "Geen Tag"}); if (!Category.some(_ => _.name.includes(i.tags[0]?.name))) Category.push(i.tags[0]) })
    return (
        <Layout>
            <CustomAuthenticatedTemplate>
                <span className="forum-header d-flex justify-content-between align-items-center">
                    <h1 className="my-5 blue-text fw-bolder">Antes Trainingen</h1>
                    <FilterDropdown page={"training"} />
                </span>
                {filterTraining(Trainings).length > 0 ? Category.map((i, index) => {
                    return <div key={index} className="ps-3 mb-5">
                        <Card className="category-card bg-antes-red">
                            <h3 className="p-2 px-4 fw-bold" >{i?.name}</h3>
                        </Card>
                        <div className="d-flex pt-3 gap-4 flex-row flex-wrap justify-content-start">

                            {filterTraining(Trainings).map((item, itemIndex) => {
                                if (item.tags[0]?.name.includes(i?.name) || (item.tags.length == 0 && i?.name == "Geen Tag")) {
                                    return <TrainingInfoCard key={itemIndex} Training={item} profile={profile} />
                                }
                                return null;
                            })}
                        </div>
                    </div>
                }) : <h4 className="blue-text opacity-75">Er zijn hier nog geen trainingen...</h4>}
            </CustomAuthenticatedTemplate>
        </Layout>
    );
};

export default Training;
