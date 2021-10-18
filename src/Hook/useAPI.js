import { useEffect, useState } from "react"
import { doctorsAPI } from "../API/doctorsAPI";
import { productsAPI } from "../API/productsAPI";
import { servicesAPI } from "../API/servicesAPI";
import { testimonialsAPI } from "../API/testimonialsAPI";

const useAPI = () => {
    const [serviceList, setServiceList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [doctorList, setdoctorList] = useState([]);
    const [testimonialList, settestimonialList] = useState([]);
    useEffect(() => {
        const tmpService = [...servicesAPI];
        setServiceList(tmpService);
        const tmpProduct = [...productsAPI];
        setProductList(tmpProduct);
        const tmpDoctor = [...doctorsAPI];
        setdoctorList(tmpDoctor);
        const tmpTestimonial = [...testimonialsAPI];
        settestimonialList(tmpTestimonial);
    }, [])

    return {
        serviceList,
        productList,
        doctorList,
        testimonialList
    }
}

export default useAPI;