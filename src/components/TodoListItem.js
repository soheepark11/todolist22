import react from "react";
import classnames from 'classnames';
import './TodoListItem.scss';

export default function TodoListItem({todo,onRemove,onToggle}){
    const {id,text,checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={classnames('checkbox',{checked})} onClick={()=>{onToggle(id)}}>
                <div className="text">{ text }</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                삭제
            </div>
        </div>
    )
}