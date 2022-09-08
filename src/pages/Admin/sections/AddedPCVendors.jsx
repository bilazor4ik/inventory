import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';


const AddedPCVendors = ({ loading, setLoading }) => {
    const [addedVendors, setAddedVendors] = useState([])

    const getPCVendors = async () => {


        const querySnapshot = await getDocs(collection(db, "availablePCVendors"));
        querySnapshot.forEach((doc) => {
            setAddedVendors(doc.data())
            setLoading(false)
        });

    }
    useEffect(() => {
        getPCVendors()
        console.log(addedVendors.lenght)
    }, [loading])

    if (!loading && addedVendors.manufacturers) {
        return (
            <div>
                <ul role="list" className="divide-y divide-gray-200">
                    {addedVendors.manufacturers.map((vendor, index) => {
                        return <li key={index}>
                            <p className="text-sm font-medium text-gray-900">{vendor}</p>
                        </li>
                    })}
                </ul>
            </div>
        )
    } if (addedVendors.manufacturers === 0) {
        return "nothing here"
    } else {
        return "loading"
    }

}

export default AddedPCVendors