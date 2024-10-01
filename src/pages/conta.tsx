import { useContext, useEffect, useState } from "react";
import { Api } from "../Api";
import CardInfo from "../components/cardInfo";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import { AppContext } from "../App";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id:string
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const {isLoggedIn} = useContext(AppContext)
  
  const {id} = useParams() 
  const navigate = useNavigate()
  !isLoggedIn && navigate

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await Api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date()


  if (userData && id !== userData.id) {
    navigate('/')
  }
  return (
    <>
      <main className="flex flex-col items-center justify-start p-2 gap-3 border-2 border-blue-700 w-screen  h-screen">
        {
          userData === undefined && userData == null ?
          ( <Loading/> ):
          (
          <>
            <CardInfo text={<p className="leading-8">Welcome back,<br/>{userData?.name}</p>} value={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
            <CardInfo text="Account Info" value={<p className="font-extrabold text-2xl">R$ {userData?.balance}</p>} />
          </>)
        }
        
      </main>
    </>
  );
};

export default Conta;
