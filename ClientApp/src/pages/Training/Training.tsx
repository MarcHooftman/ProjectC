import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ITraining from "../../interfaces/ITraining";
import TrainingInfoCard from "./TrainingInfoCard";
import "./Training.scss"
import useFetch from "../../hooks/useFetch";

const Training = () => {
    const [Trainings, setTraining] = useState<ITraining[]>([]);
    const [searchParams,] = useSearchParams()
    const filter = searchParams.get('filter')
    let Category: { id: number; name: string; }[] = []
<<<<<<< HEAD
    // let { loading, data } = useFetch("https://localhost:7185/api/training")


    useEffect(() => {
        fetch("https://localhost:7185/api/training")
          .then((response) => response.json())
          .then((data) => setTraining(data));
      }, [filter]);
    console.log(Trainings)
    
=======


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/training`)
            .then((response) => response.json())
            .then((data) => setTraining(data));
    }, [filter]);
    console.log(Trainings)

>>>>>>> 905cea39e3a1dd9b515f784470dc1b938f152abc
    // sets category to every first tag of trainings
    Trainings?.forEach((i) => { if (!Category.includes(i.tags[0])) Category.push(i.tags[0]) })

    return (
        <Layout>
            <span className="forum-header d-flex justify-content-between align-items-center">
                <h1 className="my-5 blue-text">Antes Trainingen</h1>
            </span>
            {Trainings?.length > 0 ? Category.map(i => {
                return <div key={i.id} className="ps-3">
                    <h3 className="pt-3 blue-text" >{i.name}</h3>
                    <div className="d-flex pt-3 gap-4 flex-row flex-wrap justify-content-start">
                        {Trainings.map((item) => { if (item.tags.includes(i)) return <TrainingInfoCard key={item.ID} Training={item} /> })}
                    </div>
                </div>
            }) : <h4 className="blue-text opacity-75">Er zijn hier nog geen trainingen...</h4>}
        </Layout>
    );
};

export default Training;
