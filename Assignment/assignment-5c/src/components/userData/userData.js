import { useState, useEffect } from 'react';
import { getFollowersData, getUserRepo } from '../../api-service';
import FollowersList from '../followersList/followersList';
import RepoList from '../repoList/repoList';
import '../userData/userData.css';
function UserData({ userDetails }) {
    // console.log("from user",userDetails);
    const [followers, setFollowers] = useState({});
    const [repoData, setRepoData] = useState({});
    const [showFollowers, setShowFollowers] = useState(false);

    async function getFollowers() {
        const followers = await getFollowersData(userDetails.followers_url);
        setShowFollowers(true);
        setFollowers(followers);
        console.log("Followers", followers);
    }
    useEffect(() => {
        async function getUserRepoData() {
            // console.log("repo url",userDetails.repos_url);
            const repoData = await getUserRepo(userDetails.repos_url);
            setRepoData(repoData);
            console.log("repo DAta", repoData)
        }
        getUserRepoData();
    }, [userDetails]);
    return (
        <div>
            {userDetails && !showFollowers ?
                <div>
                    <div className="user-container">
                        <div className='section1'>
                        <img className="user-img" src={userDetails.avatar_url} alt={userDetails.name} />
                        <div className='user-data'>
                        {userDetails.name}<br/>
                        {userDetails.followers} Followers<br/>
                        {userDetails.following} Following
                        </div>
                        </div>
                        <div className='section2'>
                        <button className='followers-button' onClick={() => getFollowers()}>View Followers</button>
                        </div>
                    </div>
                    {Object.keys(repoData).length === 0 ? '' : <RepoList repoData={repoData} />}
                </div>

                :
                showFollowers && Object.keys(followers).length !== 0 ?
                <FollowersList followers={followers}/>:
                <div>No followers are available</div>
            }
        </div>
    )
}
export default UserData