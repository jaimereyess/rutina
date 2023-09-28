import { useState } from 'react';
import { useRouter } from 'next/router';

const [loading, setLoading] = useState(false);
const router = useRouter();

const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        router.push('/');
    }, 3000);
}

export default handleClick
