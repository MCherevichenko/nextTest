import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer>
            <div>
                <h1 className="main_title">Главная страница</h1>
                <style jsx>
                    {`
                        .main_title{
                            padding: 25px;
                        }
                    `}    
                </style>
            </div>
        </MainContainer>
    );
};

export default Index;