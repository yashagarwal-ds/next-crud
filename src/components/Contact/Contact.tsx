import React from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/about', { scroll: false });
        console.log(router);
        console.log("clicked");
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Contact