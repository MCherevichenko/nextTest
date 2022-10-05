import Head from "next/head";
import A from "../components/A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`nextJs + ${keywords}`} />
                <title>MainPage</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="Главная"/>
                <A href={"/users"} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                    {`
                        .navbar{
                            background: orange;
                            padding: 15px;
                        }
                        .main_title{
                            padding: 25px;
                        }
                    `}    
            </style>
        </>
    );
};

export default MainContainer;