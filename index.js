const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function buildElement(){
    // create all type of elements
    const newEl = document.createElement(arguments[0])
    for (let i = 1; i < arguments.length - 1; i = i + 2){
        newEl.setAttribute(arguments[i], arguments[i+1])
    }
    return newEl
}


const containerEl = document.querySelector(".container")

function getPostHeader(post){
    // create a new element with post header infomation
    const headerEl = buildElement("section", "class", "user-info")
    const avatarImgEl = buildElement("img", "class", "avatar-img", "src", post.avatar, "alt", "user's avatart")
    const infoTextEl = buildElement("section", "class", "info-text")
    const nameTextEl = buildElement("p", "class", "name-text")
    nameTextEl.textContent = post.name

    const locationTextEl = buildElement("p", "class", "location-text")
    locationTextEl.textContent = post.location

    infoTextEl.appendChild(nameTextEl)
    infoTextEl.appendChild(locationTextEl)

    headerEl.appendChild(avatarImgEl)
    headerEl.appendChild(infoTextEl)

    return headerEl
}

function getPostImage(post){
    // create a new element for post     
    const postImgEl = buildElement("figure", "class", "post-img")
    const selfieImgEl = buildElement("img", "class", "selfie-img", "src", post.post, "alt", "selfie")
    postImgEl.appendChild(selfieImgEl)
    return postImgEl
}

function getComment(post){
    // create a new element for comment section
    const commentSectionEl = buildElement("section", "class", "comment-section")
    const iconImgsEl = buildElement("figure", "class", "icon-imgs")
    const iconImgsURL = ["images/icon-heart.png", "images/icon-comment.png", "images/icon-dm.png"]
    
    for (let i = 0; i < iconImgsURL.length; i++){
        let imgEl = buildElement("img", "src", iconImgsURL[i])
        iconImgsEl.appendChild(imgEl)
    }
    
    const likeCountTextEl = buildElement("p", "class", "like-count-text")
    const likeSpan = buildElement("span")
    likeSpan.textContent = `${post.likes} likes`
    likeCountTextEl.appendChild(likeSpan)

    const usernameCaptionEl = buildElement("p", "class", "username-caption")
    usernameCaptionEl.innerHTML = `<span class="username">${post.username}</span> ${post.comment}`
    
    commentSectionEl.appendChild(iconImgsEl)
    commentSectionEl.appendChild(likeCountTextEl)
    commentSectionEl.appendChild(usernameCaptionEl)
    
    return commentSectionEl
}


function render(posts){

    for (let i = 0; i < posts.length; i++){
        let articleEl = document.createElement("article")
        articleEl.className = "post-content"

        let header = getPostHeader(posts[i])
        let postImg = getPostImage(posts[i])
        let comment = getComment(posts[i])
        
        articleEl.appendChild(header)
        articleEl.appendChild(postImg)
        articleEl.appendChild(comment)

        containerEl.append(articleEl)
    }
}

render(posts)

