import { NextPage } from "next";

const Calculator: NextPage = () => {
    const handleAddition = (num1:number, num2:number) => {
        return num1+num2;
    }

    const handleSubtraction = (num1:number, num2:number) => {
        return num1-num2;
    }

    const handleMultiplication = (num1:number, num2:number) => {
        return num1*num2;
    }

    const handleDivision = (num1:number, num2:number) => {
        return num1/num2;
    }

    return (
        <div className="outer">
            
        </div>
    )
}