import { useState } from "react"
import RepoDetail from "../repoDetail/repoDetail";
import '../repoList/repoList.css'
function RepoList({ repoData }) {
    // console.log("repodata", repoData);
    const [showRepo, setShowRepo] = useState(false);
    const [selectedRepo, setSelectedRepo] = useState({});
    function getRepoDetail(data) {
        setSelectedRepo(data);
        setShowRepo(true);
    }
    return (
        <div>
            <div className="container">{repoData && !showRepo ? repoData.map((repo, key) =>
                <div className="listItem">
                    <div>
                        <img className="repoImg" src={repo.owner.avatar_url} alt={repo.name} />
                    </div>
                    <div className="info-wrapper">
                        <a href="#" className="user-name" onClick={() => getRepoDetail(repo)}>{repo.name}</a>
                        <p className="description">{repo.description}</p></div>
                </div>) : ''}
            </div>
            {showRepo ? <RepoDetail repoData={selectedRepo} /> : ''}
        </div>
    )
}
export default RepoList