import IProfile from "./IProfile";

interface Props {
    pfp?: string;
    profile?: IProfile;
}

const PersonalInfoCard = ({ profile, pfp = require("../../assets/profile.png") }: Props) => {
    return (
        <div className="card personalia">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img className="pfp" src={pfp} alt="profile picture" />

                    <div className="d-flex gap-4 mx-5">
                        <ul className="personal-info-keys p-0">
                            <li className="d-flex justify-content-end"><strong>Naam</strong></li>
                            <li className="d-flex justify-content-end"><strong>Functie</strong></li>
                            <li className="d-flex justify-content-end"><strong>Geboortedatum</strong></li>
                            <li className="d-flex justify-content-end"><strong>Email</strong></li>
                            <li className="d-flex justify-content-end"><strong>Lid sinds</strong></li>
                        </ul>
                        <ul className="personal-info-cells p-0">
                            <li className="d-flex">{profile?.name}</li>
                            <li className="d-flex">{profile?.role}</li>
                            <li className="d-flex">{profile?.dateOfBirth}</li>
                            <li className="d-flex">{profile?.email}</li>
                            <li className="d-flex">{profile?.memberSince}</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <strong>Bio</strong>
                </div>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
                    quod eum cumque aspernatur? Fuga est earum eos laudantium minus
                    eligendi tempore ullam, sequi sint ab unde? Labore, provident porro.
                    Suscipit in soluta numquam dolores maiores id, culpa sequi
                    exercitationem nihil consequatur inventore blanditiis aliquam iste
                    labore expedita eveniet optio velit eligendi odit dolor vero error
                    voluptas?
                </p>
            </div>
        </div>
    )
}

export default PersonalInfoCard