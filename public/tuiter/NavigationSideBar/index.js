const NavigationSidebar = () => {
    return(`
   <div class="list-group">
                <a href="tuiter.html" class="list-group-item-action list-group-item">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="home.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-house">
                        <span class="d-xl-inline d-none">Home</span>
                    </i>
                </a>
                <a href="explore.html" class="active list-group-item-action list-group-item">
                    <i class="fa-solid fa-hashtag">
                        <span class="d-xl-inline d-none">Explore</span>
                    </i>
                </a>
                <a href="notifications.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-bell">
                        <span class="d-xl-inline d-none">Notifications</span>
                    </i>
                </a>
                <a href="messages.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-envelope">
                        <span class="d-xl-inline d-none">Messages</span>
                    </i>
                </a>
                <a href="bookmarks.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-bookmark">
                        <span class="d-xl-inline d-none">Bookmarks</span>
                    </i>
                </a>
                <a href="lists.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-list">
                        <span class="d-xl-inline d-none">Lists</span>
                    </i>
                </a>
                <a href="profile.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-user">
                        <span class="d-xl-inline d-none">Profile</span>
                    </i>
                </a>
                <a href="more.html" class="list-group-item-action list-group-item">
                    <i class="fa-solid fa-ellipsis-h">
                        <span class="d-xl-inline d-none">More</span>
                    </i>
                </a>
    </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;


