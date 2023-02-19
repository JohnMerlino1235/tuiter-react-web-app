const PostSummaryItem = (post) => {
    return (`
    <a href="#" class="list-group-item-action list-group-item" aria-current="true">
        <div class="row">
            <div class="col-10">
                <div class="fw-light">${post.topic}</div>
                    <div>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa-circle-check fa-solid"></i>
                        <span class="fw-lighter"> - ${post.time}</span>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                    <div class="fw-light">${post.tweets}</div>
                </div>
            <div class="col-2">
               <i class="${post.image} fa-5x float-end"></i>
            </div>
        </div>
    </a>
    `);
}

export default PostSummaryItem;