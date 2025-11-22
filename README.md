# Twimba

A Twitter clone application built as a solo project from Scrimba.

![Srimba webpage.](/images/twimba.png)

## 🎯 Features

-   **Create Tweets**: Post your thoughts with the tweet composer
-   **Like Tweets**: Toggle likes on any tweet with visual feedback
-   **Retweet**: Toggle retweets on any tweet with visual feedback
-   **Reply System**: View and collapse replies to tweets
-   **Interactive UI**: Real-time updates without page refreshes

## 🛠️ Technologies Used

-   HTML5
-   CSS3 (with Google Fonts - Roboto)
-   JavaScript
-   Font Awesome 7.0.1 for icons
-   UUID library for unique identifiers

## 🚀 Getting Started

### Prerequisites

-   A modern web browser
-   Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository

```bash
git clone https://github.com/charleneChen/twitter-clone
cd twitter-clone
```

2. Open with a local development server (required for ES6 modules)

```bash
# Using Python
python -m http.server 8000
# or
python3 -http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

**Note**: You cannot simply open `index.html` directly in your browser due to CORS restrictions with ES6 modules. A local server is required.

## 📖 How to Use

1. **Post a Tweet**: Type your message in the "What's happening?" textarea and click the "Tweet" button
2. **Like**: Click the heart icon to like/unlike a tweet
3. **Retweet**: Click the retweet icon to retweet/unretweet
4. **View Replies**: Click the comment icon to show/hide replies to a tweet
5. **Real-time Updates**: All interactions update instantly without refreshing

## 🎨 Project Structure

```
Twimba/
├── index.html          # Main HTML structure
├── index.css           # Styling and responsive design
├── index.js            # Main JavaScript logic (event handling, UI updates)
├── data.js             # Tweet data structure
├── images/
│   └── scrimbalogo.png # Profile picture assets
└── README.md           # Project documentation
```

## 🔧 Key Functionality

### Event Delegation

The app uses efficient event delegation to handle all clicks with a single listener:

```javascript
document.addEventListener("click", function (e) {
    // Handle likes, retweets, replies, and tweet button
});
```

### Dynamic Rendering

Tweets are dynamically generated from data and rendered to the DOM:

-   Conditional icon styling (liked/retweeted states)
-   Nested reply rendering
-   Real-time count updates

### Data Management

-   Uses UUID for unique tweet identification
-   Toggle states for likes and retweets
-   Array manipulation for adding new tweets

## 📝 What I Learned

-   Event delegation patterns for better performance
-   Working with ES6 modules
-   DOM manipulation and dynamic HTML generation
-   Managing application state with JavaScript
-   Conditional rendering based on user interactions
-   CSS styling for social media-style interfaces
-   Using external libraries via CDN (Font Awesome, UUID)

## 🔮 Future Enhancements

-   [ ] Add local storage to persist tweets
-   [ ] Implement character count limit (280 characters)
-   [ ] Add timestamp to tweets
-   [ ] Create user authentication system
-   [ ] Add ability to delete tweets
-   [ ] Implement actual reply functionality (post replies, not just view)
-   [ ] Add image upload support
-   [ ] Create user profiles
-   [ ] Add hashtag and mention functionality
-   [ ] Implement tweet search/filter

## 👤 Author

**Charlene Chen**

-   GitHub: [@charleneChen](https://github.com/charleneChen)

## 🙏 Acknowledgments

-   [Scrimba](https://scrimba.com) for the project inspiration and learning resources
-   Font Awesome for the icon library
-   The UUID library for generating unique identifiers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!
