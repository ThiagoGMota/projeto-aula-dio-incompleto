import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../Api";
import Loading from "../components/loading";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id:string
  }

const ContaInfo= () => {
    const [userData, setUserData] = useState<null | UserData>();
    useEffect(() => {
        const getData = async () => {
          const data: any | UserData = await Api;
          setUserData(data);
        };
        getData();
      }, []);

    return(
        <>
        <main className="w-screen h-screen p-4">
            <h1 className="bg-black opacity-50 text-white w-full text-center rounded-lg mb-5 p-5">Your Accounts</h1>
            {
                userData === undefined && userData == null?
                (<Loading/>)
                :
                (
                    <section className="bg-black opacity-50 text-white w-full p-5 rounded-lg flex flex-col items-center">
                        <Link to={'/conta/1'} className=" cursor-pointer px-10 py-4 rounded-lg">{userData?.name}</Link>
                    </section>        
                )
            }
            
        </main>
        </>
    )
}
export default ContaInfo;