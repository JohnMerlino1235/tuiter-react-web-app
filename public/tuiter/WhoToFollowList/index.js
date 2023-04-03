import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <a href="#" class="list-group-item">
            <span class="fw-bold">Who to follow</span>
            </a>
            ${who.map(who => {
                    return WhoToFollowListItem(who)
            }).join('')
            }
         </ul>
    `);
}

export default WhoToFollowList;