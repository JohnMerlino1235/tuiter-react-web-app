const WhoToFollowListItem = (who) => {
    return (`                
       <a href="#" class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${who.avatarIcon} width="100%"/>
                </div>
                <div class="text-nowrap wd-overlay col-8">
                    <span class="fw-bold">${who.userName}</span>
                    <i class="fa-circle-check fa-solid"></i>
                    <div class="fw-light">@${who.handle}</div>
                </div>
                <div class="col-2">
                    <button class="rounded-pill float-end btn btn-primary">
                        Follow
                    </button>
                </div>
            </div>
        </a>
`);
}

export default WhoToFollowListItem;
