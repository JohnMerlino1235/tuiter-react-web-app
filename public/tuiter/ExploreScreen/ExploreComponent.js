import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11 position-relative">
                <input type="text" class="form-control-lg form-control ps-5 rounded-pill" placeholder="Search Tuiter"
                   aria-label="Search" aria-describedby="basic-addon2" />
                <span class="wd-search-icon position-absolute"><i class="fa-magnifying-glass fa-lg fa-solid"></i></span>
                </div>
                <a class="col-1 mt-2" href="explore-settings.html">
                <i class="fa-2x fa-cog fa" style="color: dodgerblue"></i>
                </a>
        </div>
        <ul class="mb-2 nav-tabs nav">
            <li class="nav-item">
                <a class="active nav-link" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="d-none d-md-inline nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative">
            <img src="covid.png" alt="Covid" width="100%">
            <h1 class="bottom-0 text-white position-absolute">Covid</h1>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
