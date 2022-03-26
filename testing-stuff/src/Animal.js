import React, {useState} from 'react'

export default function Animal() {

    const [animal, setAnimal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
      <>
    <form onSubmit = {handleSubmit}>
        <input onChange ={(e) => setAnimal(e.target.value)} value = {animal}></input>
        <button type = 'submit'>Submit</button>
    </form>
    {
        animal && <label type="text">The animal is {animal}</label>
    }
    </>
  )
}
