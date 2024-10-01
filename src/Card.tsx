import { useState } from "react";
import MainCard from "./mainCard";

interface CardProps {
  children: React.ReactNode; // Define que o componente aceita children
}
const Card: React.FC<CardProps> = ({children}:any) => {

  return (
    <>
      <MainCard>
        {children}
      </MainCard>      
    </>
  );
};

export default Card;
