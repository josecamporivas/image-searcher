export default async function getImages(searchTopic){
    const URL = `https://api.unsplash.com/search/photos/?query=${searchTopic}&client_id=oFf76RtCFvmwHRSg60VtLije_JKQnciqVLPHmyp3XPI`
    const resp = await fetch(URL)
    const images = await resp.json()

    return images.results.map(img => {
        const {id, likes, user} = img
        const url = img.urls.small
        let userData = getUserData(user)
        return {id, likes, url, userData}
    })
}

function getUserData(user){
    const {id, username, twitter_username, instagram_username} = user
    const profileImage = user.profile_image.large

    const userData = {
        id,
        userName: username,
        twitterUserName: twitter_username,
        instagramUserName: instagram_username,
        profileImage
    }
    return userData
}