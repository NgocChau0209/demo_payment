import Card from '../../components/Card/Card';
import { useState, useEffect } from "react";
import { getItemLocalStorage, saveItemLocalStorage } from '../../module/storage';
import { useSelector } from 'react-redux';
import { bankAccountAPI } from '../../services/card';
import { getBankAccountListRedux } from '../../module/redux';

export default function CardList({ }) {
    let [cardList, setCardList] = useState([]);
    const cardRedux = useSelector(state => state.card);

    useEffect(async() => {
        await getBankAccountListRedux();
        console.log(cardRedux);
    }, [])

    // function deleteCardItem(id){
    //     let existsList = cardList.filter(item=>item.id!== id)
    //     console.log(existsList)
    //     setCardList(existsList);
    //     saveItemLocalStorage('cartList',cardList);
    // }

    return (
        <div className="transaction">
            <div className="">
                {/* {cardList.map((item, index) => {
                    return <Card {...item} key={index} onDetele={deleteCardItem}/>
                })} */}
            </div>
        </div>
    )
}
