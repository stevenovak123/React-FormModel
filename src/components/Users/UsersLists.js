import React from 'react'
import Card from '../UI/Card'
import styles from './UsersLists.module.css'
function UsersLists(props) {
    return (
        <Card className={styles.users}>
        <ul>
           {props.users.map((user)=> <li>{user.name}({user.age} years old) </li>)} 
        </ul>
           </Card>
    )
}

export default UsersLists
