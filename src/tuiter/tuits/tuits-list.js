import React, {useEffect} from "react";
import TuitItem from "./tuits-item.js";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks.js";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);
    return(
        <>
            <ul className="list-group">
                {
                    loading && 
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuitsArray.map(tuit =>
                        <TuitItem
                            key={tuit._id} tuit={tuit}/>
                    )
                }
            </ul>
        </>
    );
};
export default TuitsList;
