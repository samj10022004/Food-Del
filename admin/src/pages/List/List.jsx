import { useEffect, useState } from "react"
import "./List.css"
import axios from 'axios';
import { toast } from "react-toastify";

const List = ({url}) => {


    const [list,setList]=useState([]);

    const fetchList=async()=>{
        const response =await axios.get(`${url}/api/food/list`)
        if (response.data.success) {
            setList(response.data.data);
        }
        else{
            toast.error("error")
        }
    }


    const removeFood=async (foodId)=>{
        console.log(foodId.image);
        const response = await axios.post(`${url}/api/food/remove`,{_id:foodId});
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        }
        else{
            toast.error("Error")
        }
    }


    useEffect(()=>{
        fetchList();
    },[])
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <p>Image</p>
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Action</p>
        </div>
        {list.map((item,index)=>{
            return(
                <div className="list-table-format" key={index}>
                    <img src={`${url}/images/`+item.image} alt="food_image" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p className="cursor" onClick={()=>removeFood(item._id)}>X</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default List
