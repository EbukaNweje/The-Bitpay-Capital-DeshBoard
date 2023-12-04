import React, {useEffect, useState} from 'react'
import {Container, From, Wrapper, TextDiv, InputData,Button,UpdateDiv } from "./UpdateuserStyle"
// import Axios from "axios"
// import Swal from 'sweetalert2'
import {AiFillDelete} from "react-icons/ai"
import axios from 'axios'


const UpdateWallet = ({Display}) => {
  const [data, setData] = useState()
  const [accountBalance, setAccountBalance] = useState()
  const [totalProfit, setTotalProfit] = useState()
  const [bonus, setBonus] = useState()
  const [tradingAccounts, setTradingAccounts] = useState()
  const [ref, setRef] = useState()
  const [totalDeposit, setTotalDeposit] = useState()
  const [totalWithdrawal, setTotalWithdrawal] = useState()
  // const [sessionTime, setSessionTime] = useState()
  

    const url = `https://the-bitpay-capital-back-end.vercel.app/api/alluserdata`
  
    useEffect(()=>{
      axios.get(url)
      .then(res => setData(res.data.data))
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  
  /* onst mydata = {...data} */
  console.log("this is the datas i what to use",data)
   
  useEffect(()=>{
        /* eslint-disable-next-line no-unused-expressions */
        return Display
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
      },[])
  
      // const upddatebtn = async(id, e) => {
      //   const { value: totalDeposit } = await Swal.fire(
        
      //     {
      //     title: e.target.title,
      //     input: 'text',
      //     inputLabel: e.target.title,
      //     inputValue: last,
      //     showCancelButton: true,
      //     inputValidator: (value) => {
      //       if (!value) {
      //         return 'You need to write something!'
      //       }
      //     }
      //   } 
      //   )
        
      //   if (totalDeposit) {
      //     Swal.fire(`Your LastDeposit is ${totalDeposit}`)
          
      //     let UpdateValues = e.target.title
      //     let finalData = {UpdateValues, totalDeposit}
      //     const sentApi = Object.values(finalData)
      //     const myObject = {};
      //     myObject[sentApi[0]] = sentApi[1];
      //     console.log(myObject)
      //    const lastDepositupdate = `https://preeminent-crypfield.onrender.com/api/${UpdateValues}/${id}`
      //    Axios.patch(lastDepositupdate, myObject)
      //     .then(res => console.log(res))
      //      console.log("this is the id", id) 
      //     console.log(totalDeposit) 
      //   }
      //   // window.location.reload();
      // }

      const deleteprofile = (id) => {
        const url = `https://the-bitpay-capital-back-end.vercel.app/api/userdata/${id}`
        axios.delete(url)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch((Err)=>{
          console.log(Err)
        })
      }

      // const StartSession = (id)=>{
      //   const sessionUrl = `https://cheerful-fox-waders.cyclic.cloud/api/tradingsession/${id}`
      //   axios.get(sessionUrl).then((response)=>{ console.log(response) });
      // }

      const updatedata = {accountBalance, bonus,  ref, totalDeposit, totalWithdrawal};
      const updateprofile = (id) => {
        const updateuserurl = `https://the-bitpay-capital-back-end.vercel.app/api/userdata/${id}`
          console.log(updateuserurl)
        axios.patch(updateuserurl, updatedata)
        .then(res => {
          console.log(res)
          // StartSession(id)
          window.location.reload()
        })
        .catch((Err)=>{
          console.log(Err)
        })
      }


  return (
    <Container>
        {data? 
        <From>
            {
              data.length <= 0 ? <span style={{marginTop:"20%"}}>No data</span> :
              data?.map((props)=>(
                <Wrapper>
            <div style={{width: "100%", height: "30px", display:"flex", justifyContent:"flex-end"}}><AiFillDelete style={{color:"red"}} onClick={()=>deleteprofile(props._id)}/></div>
            <TextDiv>
            <label>Name:</label>
             <p>{props.fullName}</p>
            </TextDiv>

            <TextDiv>
          <label>Email:</label>
            <p>{props.email}</p>
          </TextDiv>

          <UpdateDiv>
            <InputData>
            <label>Account Balance: </label>
            <input placeholder='Amount' onChange={(e)=> setAccountBalance(e.target.value)}/>
            {/* <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button> */}
            <span>${props.accountBalance}</span>
          </InputData>

            {/* <InputData>
            <label>Total Profit: </label>
            <input  placeholder='Amount' onChange={(e)=> setTotalProfit(e.target.value)}/>
            <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button>
            <span>${props.totalProfit}</span>
          </InputData> */}
            <InputData>
            <label>Bonus: </label>
            <input placeholder='Amount' onChange={(e)=> setBonus(e.target.value)}/>
            {/* <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button> */}
            <span>${props.bonus}</span>
          </InputData>
            {/* <InputData>
            <label>Total Investment: </label>
            <input  placeholder='Amount' onChange={(e)=> setTradingAccounts(e.target.value)}/>
            <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button>
            <span>${props.tradingAccounts}</span>
          </InputData> */}
            <InputData>
            <label>Referral Bonus: </label>
            <input  placeholder='Amount' onChange={(e)=> setRef(e.target.value)}/>
            {/* <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button> */}
            <span>${props.ref}</span>
          </InputData>
            <InputData>
            <label>Total Deposit: </label>
            <input  placeholder='Amount' onChange={(e)=> setTotalDeposit(e.target.value)}/>
            {/* <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button> */}
            <span>${props.totalDeposit}</span>
          </InputData>
            <InputData>
            <label>Total Withdrawal: </label>
            <input  placeholder='Amount' onChange={(e)=> setTotalWithdrawal(e.target.value)}/>
            {/* <Button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</Button> */}
            <span>${props.totalWithdrawal}</span>
          </InputData>
          </UpdateDiv>

            <Button onClick={()=>updateprofile(props._id)}>update</Button>
          </Wrapper>
              ))
            }
        </From>  :<span style={{marginTop:"20%"}}>Loading data....</span>} 
    </Container>
  )
}

export default UpdateWallet;
