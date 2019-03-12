import React, {Component} from 'react';

export default class Categories extends Component{
    render(){
        let cat = this.props.categories       
        console.log(cat)
        return(
            <div className="app">
               {cat.map((item,index)=>(
                   <div>
                        <h2>
                        Nama: <span style={{color:'orange'}}>{item.name} </span> 
                        Harga: {item.price} 
                        <button onClick={()=>this.props.handleCategories(item)}>Pesan</button>
                        </h2>
                        
                   </div>
               ))}
            </div>
        )
    }
}

