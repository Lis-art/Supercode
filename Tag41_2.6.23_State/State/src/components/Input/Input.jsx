import { useState } from 'react'

const inputs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

const firstNameChange = (e) => {
    setFirstName(e.target.value);
}
const lastNameChange = (e) => {
    setLastName(e.target.value);
}
const emailChange = (e) => {
    setEmail(e.target.value);
}
    return(
        <div>
            <input onChange={firstNameChange} type="text" placeholder='Vorname' value={firstName} />
            <input onChange={lastNameChange} type="text" placeholder='Nachname' value={lastName} />
            <input onChange={emailChange} type="text" placeholder='Email' value={email} />
            <p>Vorname: {firstName}</p>
            <p>Nachname {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}
export default inputs