import React, { useState, useEffect } from 'react'
import { PaymentInitModal } from "pg-test-project";
import { v4 as uuidv4 } from 'uuid';
import uniqid from 'uniqid';
import { useHistory } from 'react-router-dom'
import { theme } from './theme';
function SabpaisaPaymentGateway(props) {
 const [isOpen, setIsOpen] = useState(props.isOpen);
 const [clientCode, setClientCode] = useState("TM001");
 const [transUserName, setTransUserName] = useState("spuser_2013");
 const [transUserPassword, setTransUserPassword] =
useState("RIADA_SP336");
 const [authkey, setAuthkey] = useState("kaY9AIhuJZNvKGp2");
 const [authiv, setAuthiv] = useState("YN2v8qQcU3rGfA1y");
 const [payerName, setpayerName] = useState(props.name);
 const [payerEmail, setpayerEmail] = useState(props.email);
 const [payerMobile, setpayerMobile] = useState(props.phone);
 const [amount, setamount] = useState(props.amount);
 const [payerAddress, setpayerAddress] = useState(props.address);
 const [callbackUrl, setCallbackUrl] = useState(`${theme.url.baseURL}`);
 const [amountType, setamountType] = useState("INR");
 const [udf12, setudf12] = useState("TM001"); // client id
 const [udf13, setudf13] = useState("9885"); // plan id
 const [udf14, setudf14] = useState("SME"); // plan name
 const [udf15, setudf15] = useState(""); // application id (product id)
 const [udf16, setudf16] = useState("9885"); // // client subscribe plan detail id(refer to DB)
 const [udf17, setudf17] = useState(""); // payment from the COB portal
 const [channelId, setchannelId] = useState("");
 const [programId, setprogramId] = useState("");
 const [mcc, setmcc] = useState("");


//PROD
//  const [clientCode, setClientCode] = useState("KEVI96");
//  const [transUserName, setTransUserName] = useState("kevin.paul_15805");
//  const [transUserPassword, setTransUserPassword] =
// useState("KEVI96_SP15805");
// const [authkey, setAuthkey] = useState("ADkVvLGQw7X5rRbJ");
//  const [authiv, setAuthiv] = useState("3NV2ztMRsOoOmgnr");
//  const [payerName, setpayerName] = useState(props.name);
//  const [payerEmail, setpayerEmail] = useState(props.email);
//  const [payerMobile, setpayerMobile] = useState(props.phone);
//  const [amount, setamount] = useState(props.amount);
//  const [payerAddress, setpayerAddress] = useState(props.address);
//  const [callbackUrl, setCallbackUrl] = useState(`${theme.url.baseURL}`);
//  const [amountType, setamountType] = useState("INR");
//  const [udf12, setudf12] = useState("KEVI96"); // client id
//  const [udf13, setudf13] = useState("9885"); // plan id
//  const [udf14, setudf14] = useState("SME"); // plan name
//  const [udf15, setudf15] = useState(""); // application id (product id)
//  const [udf16, setudf16] = useState("9885"); // // client subscribe plan detail id(refer to DB)
//  const [udf17, setudf17] = useState(""); // payment from the COB portal
//  const [channelId, setchannelId] = useState("");
//  const [programId, setprogramId] = useState("");
//  const [mcc, setmcc] = useState("");
 //PROD


 console.log(props);
 useEffect(() => {
  setIsOpen(props?.isOpen);
}, [props])
const history = useHistory();
const responseValues = history?.location?.search;
useEffect(() => {
 if (responseValues) {
   history.push({
     pathname: "/result",
     state: {
       data: responseValues
     }
}) }
console.log(responseValues);
}, [responseValues])
return (
<div> {
   //1) Testing with production enironment please pass env="prod"
   // 2)Testing with stageing enironment please pass env="" or env="stage"
   // 3)Default it is going to catch env=""
<PaymentInitModal
     clientCode={clientCode}
     transUserPassword={transUserPassword}
     transUserName={transUserName}
     isOpen={isOpen}
     clientTxnId={uniqid()}
     authkey={authkey}
     authiv={authiv}
     payerName={payerName}
     payerEmail={payerEmail}
     payerMobile={payerMobile}
     payerAddress={payerAddress}
     amount={amount}
     amountType={amountType}
     udf12={udf12}
     udf13={udf13}
     udf14={udf14}
     udf15={udf15}
     udf16={udf16}
    //  udf17={udf17}
     onToggle={() => setIsOpen(!isOpen)}
     channelId={channelId}
     programId={programId}
     mcc={mcc}
     label={"Production"}
     env={'stage'}
     
/>
}</div>
) }
export default SabpaisaPaymentGateway