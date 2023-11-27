import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IUser from "../../interfaces/IUser";


const CreateProfile = () => {
    const [searchParams,] = useSearchParams()
    const userID = searchParams.get('userId')
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();
    //const [creating, setCreating] = useState<boolean>(false);


    const [fullName, setFullName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [dept, setDept] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [bio, setBio] = useState<string>("");

    useEffect(() => {
        if (userID) {
            fetch(`https://localhost:7185/api/user/${userID}`)
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [userID]);


    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFullName(event.target.value);
    };


    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPhone(event.target.value);
    };


    const handleDeptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setDept(event.target.value);
    };


    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setRole(event.target.value);
    };


    const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setBio(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //setCreating(true);
        console.log(user)

        if (user) {
            localStorage.setItem("user", `${user.id}`);


            const profile = {
                UserID: user.id,
                User: user,
                FullName: fullName,
                Bio: bio,
                MemberSince: "2023-11-11",
                Role: role,
                DateOfBirth: "2023-10-10",
                Department: dept,
                PhoneNumber: phone,
            };


            fetch("https://localhost:7185/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profile),
            }).catch((error) => {
                throw new Error(error);
            });


            //setCreating(false);
            navigate("/profile");
        } else {
            console.log("nope");
        }
    };


    return (
        <Container>
            <>
                <h1 className="blue-text my-5">Creëer je profiel</h1>
                <Card className="shadow-lg">
                    <Card.Body>
                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            <h6 className="text-dark opacity-50">
                                Let op, de informatie die u hier invult is door anderen te zien
                                op uw profiel. Vul geen informatie in die u niet openbaar wilt
                                maken.
                            </h6>
                            <div className="d-flex flex-column w-25">
                                <label htmlFor="name">
                                    Volledige naam<span className="text-danger">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Naam"
                                    onChange={handleFullNameChange}
                                ></input>
                            </div>
                            <div className="d-flex flex-column w-25">
                                <label htmlFor="phone">Telefoonnummer</label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="06 12345678"
                                    onChange={handlePhoneChange}
                                ></input>
                            </div>
                            <div className="d-flex flex-column w-25">
                                <label htmlFor="role">Functie</label>
                                <input
                                    id="role"
                                    type="text"
                                    placeholder="Functie"
                                    onChange={handleRoleChange}
                                ></input>
                            </div>
                            <div className="d-flex flex-column w-25">
                                <label htmlFor="dept">Afdeling</label>
                                <input
                                    id="dept"
                                    type="text"
                                    placeholder="Afdeling"
                                    onChange={handleDeptChange}
                                ></input>
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="bio">Bio</label>
                                <textarea id="bio" placeholder="Bio" onChange={handleBioChange}></textarea>
                            </div>
                            <p className="text-danger">* Verplicht</p>
                            <Button type="submit">Profiel creëren</Button>
                        </form>
                    </Card.Body>
                </Card>
            </>
        </Container>
    );
};


export default CreateProfile;





