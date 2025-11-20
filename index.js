import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
    console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    } else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet);
    } else if (e.target.dataset.reply) {
        handleReplyClick(e.target.dataset.reply);
    }
});

function handleLikeClick(tweetId) {
    // shallow copy
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;
    })[0];

    if (targetTweetObj.isLiked) {
        targetTweetObj.likes--;
    } else {
        targetTweetObj.likes++;
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked;

    renderFeedHtml();
}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;
    })[0];

    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--;
    } else {
        targetTweetObj.retweets++;
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;

    renderFeedHtml();
}

function handleReplyClick(replyId) {
    document.getElementById(`replies-${replyId}`).classList.toggle("hidden");
}

function getFeedHtml() {
    let feedHtml = ``;

    /*
    for (let tweet of tweetsData) {
        feedHtml += `
            <div class="tweet">
                <img src="${tweet.profilePic}" alt="A profile picture of user ${tweet.handle}" class="profile-pic">
                <div>
                    <p class="tweet-handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">${tweet.replies.length}</span>
                        <span class="tweet-detail">${tweet.likes}</span>
                        <span class="tweet-detail">${tweet.retweets}</span>
                    </div> 
                </div>
            </div>
        `;
    }
    */

    tweetsData.forEach(function (tweet) {
        let likeIconclass = "";
        if (tweet.isLiked) {
            likeIconclass = "liked";
        }

        let retweetIconClass = "";
        if (tweet.isRetweeted) {
            retweetIconClass = "retweeted";
        }

        let repliesHtml = ``;

        if (tweet.replies.length) {
            tweet.replies.forEach(function (reply) {
                repliesHtml += `
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${reply.profilePic}" alt="A user profile picture for ${reply.handle}" class="profile-pic">
                            <div>
                                <p class="tweet-handle">${reply.handle}<p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" alt="A profile picture of user ${tweet.handle}" class="profile-pic">
                <div>
                    <p class="tweet-handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconclass}" data-like="${tweet.uuid}"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                            ${tweet.retweets}
                        </span>
                    </div>
                </div>
            </div>
            <div id="replies-${tweet.uuid}" class="hidden">
                ${repliesHtml}
            </div>
        </div>
        `;
    });
    return feedHtml;
}

function renderFeedHtml() {
    document.getElementById("feed").innerHTML = getFeedHtml();
}

renderFeedHtml();
