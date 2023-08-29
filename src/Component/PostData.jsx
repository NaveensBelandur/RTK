import React from 'react'
import {useState} from 'react'
import {useAddDataMutation} from '../Features/RTKQuerry/FetchQuerry'

const Form = () =>{
    const [PostData] = useAddDataMutation()
    const [data,SetData] = useState({
        title:'',
        body:''
    })

  const TitleChange =(e) =>{
     SetData({
        ...data,title:e.target.value
     })
  }


  const bodyChange = (e) =>{
    SetData({
        ...data,body:e.target.value
    })
  }


  const SubmitData = (e) =>{
    e.preventDefault()
    const formData = {
        title:data.title,
        body:data.body
    }
     PostData(formData)

    SetData({
        title:'',
        body:''
    })
    console.log(formData)
  }
    return (
        <React.Fragment>
            <section>
                <p>Sending the data to the server</p>
                <form onSubmit={SubmitData}>
                   <label>Title</label>
                   <input type='text' value={data.title} onChange={TitleChange} />
                   <label>Body</label>
                   <input type='text' value={data.body} onChange={bodyChange}/>
                   <input type='submit' value='Submit'/>
                </form>
            </section>
        </React.Fragment>
    )
}





export default Form