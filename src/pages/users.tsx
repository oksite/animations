
import React from 'react';
import { Button, Card, Icon } from 'antd';


export default class users extends  React.Component {

  state ={
    list:[
      {
        title:'2rrgt78g672',
      }
    ],
  }

  componentDidMount(){

  }

  onClickAdd=()=>{
    const list = this.state.list.concat({
      title: Math.random().toString(36).substr(2)
    })
    this.setState({
      list
    })
  }

  onClickRemove=(key: number)=>{
    document.querySelectorAll('.item')[key].classList.add('fadeOut')
    let list = this.state.list.filter(
      (item, index) => index !== key
    )
    setTimeout(()=>{
      this.setState({
        list
      })
    },1000)
  }

  render(){
    const { list } = this.state;

    console.log(list)

    return (
      <div className='normal'>
        <style>
          {`
              .normal {
                width: 600px;
                margin: 40px auto;
              }

            .item {
              display: flex;
              justify-content: space-between;
              background: rgb(204, 204, 204);
              padding: 20px 10px;
              align-items: center;
              margin-bottom: 10px;
              border-radius: 5px;
              cursor: pointer;
              animation: fadeIn 1s both;
            }

            .item span {
              font-size: 14px;
            }

            .fadeIn {
              animation: fadeIn 1s both;
            }
            
            @-webkit-keyframes fadeIn {
              from {
                  opacity: 0
              }
            
              to {
                  opacity: 1
              }
            }
            
            @keyframes fadeIn {
              from {
                  opacity: 0
              }
            
              to {
                  opacity: 1
              }
            }
            
            .fadeOut {
              animation: fadeOut 1s both;
            }
            
            @-webkit-keyframes fadeOut {
              from {
                  opacity: 1
              }
            
              to {
                  opacity: 0;
              }
            }
            
            @keyframes fadeOut {
              from {
                  opacity: 1
              }
            
              to {
                  opacity: 0;
              }
            }
          `}
        </style>
      <Card  title={<Button type="primary" icon="plus" onClick={()=>this.onClickAdd()}>add comtact</Button>}>
          {
            list.map((item, index)=>(
              <div className="item" key={item.title} onClick={()=> this.onClickRemove(index)}>
                <span>{item.title}</span><Icon type="close" />
              </div>
            ))
          }
      </ Card>
      </div>
    )
  }
}

