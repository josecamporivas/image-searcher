import './UserData.css'

export default function UserData({userData}){
    return (
        <div className="userData">
            <img className='imageUserData' alt={userData.userName} src={userData.profileImage} />
            <h5 className='nameUserData'>{userData.userName}</h5>
            {
            userData.instagramUserName?
                <div className='instagramInfo'>
                    <a href={`https://www.instagram.com/${userData.instagramUserName}`}>
                        <p>@{userData.instagramUserName}</p>
                    </a>
                    
                </div>
                : <></>
            }<br/>
            {
            userData.twitterUserName?
                <div className='twitterInfo'>
                    <a href={`https://www.twitter.com/${userData.twitterUserName}`}>
                        <p>@{userData.twitterUserName}</p>
                    </a>
                </div>
                : <></>
            }
        </div>
    )
}