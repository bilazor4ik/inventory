import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import LoadingPreview from '../../../components/LoadingPreview';
import { db } from '../../../firebase';

const ListOfAllInventory = () => {
  const [allInventory, setAllInventory] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllInventory = async () => {
    //set loading to true while getting data
    setLoading(true)
    // get reference to Inventory collection in DB
    const inventoryRef = await getDocs(collection(db, "inventory"));
    // retrieve all documents (inventory items) in collection and write to array
    inventoryRef.forEach((doc) => {
      
      
      setAllInventory(prev=>[...prev, doc.data()])
    });
    //set loading to false after all data loaded
    setLoading(false)
  }
  // get list of all inventory items when page renders
  useEffect(()=>{
    getAllInventory()
  },[])

  if(!loading){
    return (
      <div>ListOfAllInventory</div>
    )
  }else{
    return <LoadingPreview/>
  }
}

export default ListOfAllInventory