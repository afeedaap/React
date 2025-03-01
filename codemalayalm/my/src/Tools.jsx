import React,{Component} from 'react'

import './Tools.css';
class Tools extends Component{
  
    render()
    {    const {children,onAction,labelValue}=this.props
        const onlyChild=React.Children.only(children)
     
        const count=React.Children.count(onlyChild.props.children)
        // console.log(count);
        return <div className='list-tools'>
            <div className="list-header">
                <select value={labelValue} onChange={onAction} name="startlist" >
                    <option value="all">all</option>
                    <option value="active">Active</option>
                    <option value="non-active">Diasabled</option>
                </select>
            </div>
            {children}
            <div className="list-footer">
           total  {count} items
            </div>
            </div>
    }
}
export default Tools
