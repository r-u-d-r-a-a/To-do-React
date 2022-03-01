import { Component, Fragment } from "react";
import  "./App.css";
class App extends Component {

  constructor(props)
  {
    super(props)
    {

      var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
        task: " ",
        list: [],
        currentind:0,

         currentdate:date
         
        
      }
    }

  }

  updateInput(value)
  {
    this.setState({
      task: value,
    });
  }

  add() 
  {
    

    if(this.state.task==" ")
    {
      alert("Enter a task")
    }
    else{

      this.state.list.push(this.state.task);

      this.setState({
        task: " "
      })

    }

  }

  removetask(ind) 
  {
    
    this.state.list.splice(ind, 1);  
    this.updateInput()
    
  }

  componentDidMount() {
    this.searchInput.focus();
  }

   
  edittask(ind)
  {

    this.setState({
      currentind:ind
    })

    this.searchInput.focus();

    this.setState(
      {
        task: this.state.list[ind]
      }
    );

    // <button className="addb" onClick={() => this.doneedit()}>+</button> 

    this.setState({
      toggle:true
    })
    
  }

  doneedit(value)
  {
    this.setState({
      task: value,
    });

    this.state.list[this.state.currentind] = this.state.task;

   

    this.setState({
      task: " "
    })

    this.setState({
      toggle:false
    })

  }

  
    
  render() 
  {
    
    var message
    if(this.state.toggle==true)
    {
      message = "edit"
    }
    else{
      message="add"
    }

    
   

    return (


      <div className="square"> 
        <div>
        <textarea  className="textarea" ref={inputEl => (this.searchInput = inputEl)} value={this.state.task} onChange={item => this.updateInput(item.target.value)} />
        </div>


        {/* <div>
        <button className="done" onClick={() => this.doneedit(item => this.updateInput(item.target.value))}>done</button> 
        </div> */}

        <div>
        <button className="addb" onClick={(this.state.toggle==false)?() =>this.add():() => this.doneedit(item => this.updateInput(item.target.value))}>{message}</button> 
        </div>
       
        <div >
     
      {this.state.list.map(x => <h5  className="tasktext"> {this.state.list.indexOf(x)+1})  {x} 
      
      <button className="delbutton" onClick={() => this.removetask(this.state.list.indexOf(x))}> - </button> 
      <button className="editbutton" onClick={() => this.edittask(this.state.list.indexOf(x))}> edit </button>
      {/* <button className= "taskisdone" onClick={() => this.taskdone(this.state.list.indexOf(x))}> done </button> */}
      
      <h1 className="date">{this.state.currentdate} </h1>
      </h5> )
      
      }  
      
        </div>

        <div>
          <p className="heading">Hello,</p>
          <p className="about">Use this to make your own to do list by adding your tasks and deleting when done.</p>
        </div>
        
      </div>
      
    );

   

    
  }

}


export default App;
