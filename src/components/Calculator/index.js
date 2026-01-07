import { useState, useEffect, useCallback } from "react"
import { FaPercentage, FaDivide, FaPlus, FaMinus, FaEquals } from "react-icons/fa"
import { RiDeleteBack2Line } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import {evaluate} from "mathjs"
import "./index.css"

const Calculator =()=>{

    const[value,setvalue]=useState("")

    const onClick1=()=>{
        setvalue(prev=>String(prev) + "1")
    }

    const onClick2=()=>{
        setvalue(prev=>String(prev) + "2")
    }

    const onClick3=()=>{
        setvalue(prev=>String(prev) + "3")
    }

    const onClick4=()=>{
        setvalue(prev=>String(prev) + "4")
    }

    const onClick5=()=>{
        setvalue(prev=>String(prev) + "5")
    }

    const onClick6=()=>{
        setvalue(prev=>String(prev) + "6")
    }

    const onClick7=()=>{
        setvalue(prev=>String(prev) + "7")
    }

    const onClick8=()=>{
        setvalue(prev=>String(prev) + "8")
    }

    const onClick9=()=>{
        setvalue(prev=>String(prev) + "9")
    }

    const onClick0=()=>{
        setvalue(prev=>String(prev) + "0")
    }

    const onClick00=()=>{
        setvalue(prev=>String(prev) + "00")
    }

    const onClickDot=()=>{
        setvalue(prev=>String(prev) + ".")
    }

    const onClickAC=()=>{
        setvalue("")
    }

    const onClickBack=()=>{
        setvalue(prev=>String(prev).slice(0,-1))
    }

    const addOperator = useCallback((op) => {
        setvalue(prev =>{
            const lastChar=prev.slice(-1)
            if(lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/" || lastChar==="%" || lastChar==="."){
                return prev
            }
            return prev==="" ? prev : prev + op
        })
    },[])


    const onClickPlus=()=>{
        addOperator("+")
    }

    const onClickMinus=()=>{
        addOperator("-")
    }

    const onClickMultiplication=()=>{
        addOperator("*")
    }

    const onClickDivision=()=>{
        addOperator("/")
    }

    const onClickPercentage=()=>{
        addOperator("%")
    }

    const onClickEqual = useCallback(() => {
        setvalue(prev => {
            if (prev === "") return prev
            try {
                const expression = String(prev).replace(/%/g, "/100")
                const result = evaluate(expression)
                console.log("Result : ",result)
                return String(result)
            } catch {
                return prev
            }
        })
    }, [])

    useEffect(()=>{
        const handleKeyDown=(e)=>{
            const key=e.key

            if(key==="0") onClick0()
            else if(key==="1") onClick1()
            else if(key==="2") onClick2()
            else if(key==="3") onClick3()
            else if(key==="4") onClick4()
            else if(key==="5") onClick5()
            else if(key==="6") onClick6()
            else if(key==="7") onClick7()
            else if(key==="8") onClick8()
            else if(key==="9") onClick9()
            else if(key===".") onClickDot()
            else if(key==="+") onClickPlus()
            else if(key==="-") onClickMinus()
            else if(key==="*") onClickMultiplication()
            else if(key==="/") onClickDivision()
            else if(key==="%") onClickPercentage()
            else if(key==="Enter"||key==="="){
                e.preventDefault()
                onClickEqual()
            }
            else if(key==="Backspace") onClickBack()
            if(key==="Escape") onClickAC()
        }
        window.addEventListener("keydown",handleKeyDown)

        return()=>{
            window.removeEventListener("keydown",handleKeyDown)
        }        

    },[onClickEqual]) //eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div>
            <h1 className="value">{value || "0"}</h1>
            <div className="calculator-container">
                <button className="btn-item" onClick={onClickAC}>AC</button>
                <button className="btn-item" onClick={onClickPercentage}><FaPercentage /></button>
                <button className="btn-item" onClick={onClickBack}><RiDeleteBack2Line /></button>
                <button className="btn-item" onClick={onClickDivision}><FaDivide /></button>
                <button className="btn-item" onClick={onClick7}>7</button>
                <button className="btn-item" onClick={onClick8}>8</button>
                <button className="btn-item" onClick={onClick9}>9</button>
                <button className="btn-item" onClick={onClickMultiplication}><RxCross2 /></button>
                <button className="btn-item" onClick={onClick4}>4</button>
                <button className="btn-item" onClick={onClick5}>5</button>
                <button className="btn-item" onClick={onClick6}>6</button>
                <button className="btn-item" onClick={onClickMinus}><FaMinus /></button>
                <button className="btn-item" onClick={onClick1}>1</button>
                <button className="btn-item" onClick={onClick2}>2</button>
                <button className="btn-item" onClick={onClick3}>3</button>
                <button className="btn-item" onClick={onClickPlus}><FaPlus /></button>
                <button className="btn-item" onClick={onClick00}>00</button>
                <button className="btn-item" onClick={onClick0}>0</button>
                <button className="btn-item" onClick={onClickDot}>.</button>
                <button className="btn-item" onClick={onClickEqual}><FaEquals /></button>
            </div>
        </div>
    )
}

export default Calculator