import React, {Component} from 'react';
import Categories from './Categories';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            product : [
                {
                    name: 'Nasi Goreng 212',
                    price: 12000,
                    categories : 'rice'
                },
                {
                    name: 'Mie Ayam 212',
                    price: 20000,
                    categories : 'noodle'
                },
                {
                    name: 'Capcay Nio',
                    price: 15000,
                    categories : 'desert'
                },
                {
                    name: 'Nasi Goreng Gila',
                    price: 25000,
                    categories : 'rice'
                }
            ],
            carts : [],
            totalBayar:''
        }
    }

    handleCategories(item){
        let lastState = this.state.carts;
        lastState.push(item)
        this.setState({
            carts: lastState
          })
    }

    handleSubTotal(){
        let totalPrice = 0
        this.state.carts.map((item, index)=> totalPrice+= item.price) //state.carts.map bisa dibikin kek ginian ternyata, dibikin function buat menghitung banyaknya cost
        return totalPrice 
    }

    handleFinalTotal(event){
        let bayar = event.target.value
        let total = this.handleSubTotal()
        let kembalian = bayar -= total
        console.log(kembalian)
        this.setState({
            totalBayar: kembalian
        })
        return kembalian
    }   
    
    render(){
        let cat = this.state.product;
        return(
            <div className="app">
                <h1>Ini Menu Kami</h1>
                    <Categories categories={cat} handleCategories={(item)=>this.handleCategories(item)}/>
                <h2>my cart</h2>
                    {this.state.carts.map((item,index)=>(
                    <div>
                        <tr>
                            <td>{item.name} : </td>
                            <td> Rp. {item.price}</td>
                        </tr>
                    </div>
                    ))}
                <h2>Harga Yang Harus Dibayar :</h2>
                <p>Rp. {this.handleSubTotal()}</p>
                <input type="text" placeholder="uang yang dibayarkan" onChange={(event)=>this.handleFinalTotal(event)}/>
                <h2>Kembalian : Rp. {this.state.totalBayar}</h2>
            </div>
        )
    }
}