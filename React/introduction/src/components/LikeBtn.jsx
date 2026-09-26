import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function LikeBtn() {

    const [status, setStatus] = useState(true);

    if(status) return <AiOutlineHeart size={20} onClick={() => setStatus(false)}/>
    return <AiFillHeart color='red' size={20} onClick={() => setStatus(true)}/>

}

export default LikeBtn;