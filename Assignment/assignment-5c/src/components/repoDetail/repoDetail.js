import React from 'react';
import '../repoDetail/repoDetail.css'
function RepoDetail({repoData}){
    let data =repoData;
    console.log("singleRepo", repoData);
    let ownerData = data.owner;
    return(
        <div className="repoWrapper">
            <div className="leftSection">
                <div>
                <img className='repo-img' src={ownerData.avatar_url} alt={ownerData.name} />
                </div>
                {data.forks_count ?<div>
                    {data.forks_count} forks
                </div> :""}
                {data.language ? 
                <div>
                    <div style={{color:"gray"}}>Language</div>
                    <div>{data.language }</div>
                </div>
                :""}
            </div>
            <div className="RightSection">
                <div className="title">{data.name}</div>
                <div>{data.description}</div>
                {data.homepage ? <div>
                    <a href={data.homepage}>{data.homepage} </a>
                </div>
                :""}
            </div>
        </div>
    )
}
export default RepoDetail;