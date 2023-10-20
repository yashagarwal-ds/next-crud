import React from 'react';

interface IProps {
    children : any;
    className : string;
    onClick? : (id : any) => void;
}

const Button:React.FC<IProps> = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button