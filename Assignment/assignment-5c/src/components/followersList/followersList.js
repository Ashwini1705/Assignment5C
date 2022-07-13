import React, { useState } from 'react';
import UserData from '../userData/userData';
import '../followersList/followersList.css';
import { getuserDetails } from '../../api-service';

function FollowersList({ followers }) {
    const [userInfo, setUserInfo] = useState({});
    const [showList, setShowList] = useState(true);

    async function getUserInfoData(userValue, repoUrl) {
        const userInfo = await getuserDetails(userValue);
        setShowList(false);
        setUserInfo(userInfo);
    }
    return (
        <div>
            <div className="followers-container">{followers && showList ? followers.map((follower, key) =>
            <div className="followers-wrapper">
                <div>
                    <img className="follower-img" src={follower.avatar_url} alt={follower.login} />
                </div>
                <div className="follower-info">
                    <a href="#" className="follower-name" onClick={() => getUserInfoData(follower.login, follower.repos_url)}>{follower.login}</a>
                </div>
            </div>) : ''}</div><div>{!showList ? <UserData userDetails={userInfo} /> : ''}</div></div>
    )
}

export default FollowersList