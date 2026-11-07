import ChildComponent1 from "./Childcomponents/ChildComponent1"
import ChildComponent2 from "./Childcomponents/ChildComponent2"


export function GetAllMobileNamesAndIphoneData() {

    const mobileNames = ["I Phone 12","Samsung","Nokia"]


const iphoneData = {
name: "I-Phone",
price: 2000,
demand: "Low",
stock: 0
}
return(
    <div className= " bg-linear-to-br from-teal-200 via-teal-500 to-teal-900 text-center min-h-screen">
        the mobiles in the list are {mobileNames+","} <br/>
        the I-phone data is | Name: {iphoneData.name} Price: {iphoneData.price} Demand: {iphoneData.demand}<br/>

        So the phone name is {iphoneData.name}, the phone price is {iphoneData.price}, and the demand is {iphoneData.demand}<br/>

        The dream phone is {mobileNames[0]}, the stylish phone is {mobileNames[1]}, the strong phone is {mobileNames[2]}<br/>

        Checking I-Phone Stock...<br/>

        {iphoneData.stock == 0 ?"Sorry the I-Phones are out of stock":`We have ${iphoneData.stock} I-phones in stock`}

        <ChildComponent1/>
        <ChildComponent2/>
    </div>
)
}

export default function DefaultGreetings() {
    return(
        <p>Hey how are you??</p>
    )
}


