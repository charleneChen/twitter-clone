import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");
const feed = document.getElementById("feed");

tweetBtn.addEventListener("click", function () {
    console.log(tweetInput.value);
});

function getFeedHtml() {
    let feedHtml = "";
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
    return feedHtml;
}

feed.innerHTML = getFeedHtml();
