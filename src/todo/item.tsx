import React, {FC, useState} from "react";

interface IPost {
    id: string,
    title: string,
    index: number
    handleClick: (item: IPost) => void
}

const Item: FC<IPost> = function (props) {


    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: 20,
            padding: 20,
        }}
             onClick={() => props.handleClick(props)}
             key={props.index}
        >

            <span> {props.id}</span>
            <span> {props.title}</span>
        </div>
    )
}

export default Item