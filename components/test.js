import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import user from '../public/user.png'

export default function Test({ value, onChange, values, index, question, allQuestions, updateQuestions }) {

    function handleChange(event) {
        let updates = values;
        updates[index] = event.target.value
        
        // Here, we invoke the callback with the new value
        onChange(updates);
        console.log(values)
    }
  
    return <input value={value} onChange={handleChange} />
}
