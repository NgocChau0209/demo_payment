
import MastercardIcon from '../components/Icon/Bank/MasterCard';
import PaypalIcon from '../components/Icon/Bank/Paypal';
import VisaIcon from '../components/Icon/Bank/VISA';

export function paymentRegister(type:string){
    const list:any ={
        "mastercard":{
            background: {
                'background': '#e0eafc',
                'colorFrom': '#e0eafc',
                'colorTo': '#cfdef3',
            },
            logo:MastercardIcon
        },
        "visa":{
            background:{   
                'colorFrom': '#2193b0',
                'colorTo': '#6dd5ed',
            },
            logo:VisaIcon
        },
        "paypal":{
            background:{
                'colorFrom': '#ffefba',
                'colorTo': '#ffffff',
            
            },
            logo:PaypalIcon
        }
        
    }
    return list[type];

}