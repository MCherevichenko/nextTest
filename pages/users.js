import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from '../styles/UserList.module.scss';

const Users = ({users}) => {

    return (
        <MainContainer>
            <div className={styles.user_list}>
                <h1 className={styles.header}>Список пользователей</h1>
                <ul className={styles.ul}>
                    {users ?  users.map(user => 
                        <li key={user.id} className={styles.link}>
                            <Link href={`/users/${user.id}`}>
                                <a className={styles.link}>{user.name}</a>
                            </Link>
                        </li>
                    ) : <h1>Пользователей нет</h1>}
                </ul>
            </div>   
        </MainContainer>
        
    );
};

export default Users;

export async function getStaticProps(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/users');      
    const users = await response.json();
    
    return {
        props: {users},
    }
}