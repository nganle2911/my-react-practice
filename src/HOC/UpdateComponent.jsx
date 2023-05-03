import React, { useState } from 'react'

// UpdateComponent nhận vào OriginalComponent & trả về NewComponent 
// NewComponent này sẽ chứa các tính năng và hành vi để áp dụng cho cho Person1 & Person2 

const UpdateComponent = (OriginalComponent) => {

    const NewComponent = () => {
        const [money, setMoney] = useState(10); 
        const handleIncrease = () => {
            setMoney(money * 2); 
        };
        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }

    return NewComponent; 
}

export default UpdateComponent