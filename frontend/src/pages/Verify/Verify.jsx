import { useNavigate, useSearchParams } from "react-router-dom"
import "./verify.css"
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext"
import axios from "axios";

const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get('success');
    const orderId=searchParams.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();

    const verifyPayment=async()=>{
        try {
            const token =localStorage.getItem('token');
            if (!token) {
                throw new Error("Token not found");
            }
            const response=await axios.post(url+"/api/order/verify",{success,orderId},{headers:{token}})
            console.log(response);
            if (response.data.success) {
                navigate("/myorders");
            }
            else{
                navigate("/")
            }
        } catch (error) {
            console.error("Payment verification error:", error);
            navigate("/");
        }
        

    }
    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
