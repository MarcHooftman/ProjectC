import IUserData from './IUserData';

interface Props {
    userData?: IUserData;
}

const UserDataCard = ({ userData }: Props) => {
    return (
        <div className="card user-data">
            <div className="card-body d-flex flex-column">
                <div className="card-title text-center">
                    <strong>Overzicht</strong>
                </div>
                <div className="d-flex justify-content-between">
                    <ul className="user-data-keys p-0">
                        <li className="d-flex">Posts geplaatst</li>
                        <li className="d-flex">Comments geplaatst</li>
                        <li className="d-flex">Behulpzame comments</li>
                        <li className="d-flex">Likes ontvangen</li>
                    </ul>
                    <ul className="user-data-cells p-0">
                        <li className="d-flex">{userData?.postsPlaced}</li>
                        <li className="d-flex">{userData?.commentsPlaced}</li>
                        <li className="d-flex">{userData?.helpfulComments}</li>
                        <li className="d-flex">{userData?.totalLikes}</li>
                    </ul></div>
            </div>
        </div>
    )
}

export default UserDataCard