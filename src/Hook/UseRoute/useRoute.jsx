import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const useRoute = () => {

    const params = useParams(); 
    const navigate = useNavigate(); 
    const searchParams = useSearchParams(); 


  return {params, navigate, searchParams};
}

export default useRoute