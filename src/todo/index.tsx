import React, {FC} from "react";
import {isTemplateSpan} from "typescript";
import Item from "./item"


interface IPost {
    id: string,
    title: string,
}

interface ChildComponentProps {
    data: IPost[]
}

const TodoList: FC<ChildComponentProps> = function (props) {
    const {data} = props

    const handleClick = function (item: IPost) {
        console.log(item)
    }

    return (
        <div>
            {data.map((item: IPost, index: number) => {
                return (
                    <Item
                        id={item.id}
                        title={item.title}
                        index={index}
                        handleClick={handleClick}
                    />
                )
            })}
        </div>
    )
}

export default TodoList