 interface IProp{
    children:string
 }

const Button = ( {children}:IProp) => {
  return (
  <button className="">{children}</button>
    
 
 
);
};

export default Button;