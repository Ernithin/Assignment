import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIST_DATA } from "../Redux/action";
const Form = () => {
    const [data, setData] = useState([1, 2, 3, 4,5])
    const List = useSelector((state) => state.listData)
    console.log(List, 'List');
    const dispatch = useDispatch()
    return (
        <Fragment>
            <button onClick={() => {
                dispatch({
                    type: LIST_DATA,
                    payload: data
                })
            }}>submit</button>
        </Fragment>
    )
}
export default Form