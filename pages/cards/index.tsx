import { getCardList } from "../api"
import Card from '../../components/Card/Card';
import { useState,useEffect } from "react";
import { getItemLocalStorage,saveItemLocalStorage } from '../../module/storage';
export default function CardList ({list}){
    let [cardList,setCardList] = useState(list);
    

    function deleteCardItem(id){
        let existsList = cardList.filter(item=>item.id!== id)
        console.log(existsList)
        setCardList(existsList);
        saveItemLocalStorage('cartList',cardList);
    }

    return (
        <div className="transaction">
            <div className="">
                {cardList.map((item, index) => {
                    return <Card {...item} key={index} onDetele={deleteCardItem}/>
                })}
            </div>
        </div>
   )
}


export async function getStaticProps(){
    let res = await getCardList();
    
    return {
        props:{
            list: res
        }
    }
}