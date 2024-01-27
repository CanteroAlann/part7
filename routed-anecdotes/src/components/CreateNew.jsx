
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useField from '../custom_hooks/custom_field'

const CreateNew = (props) => {
    /*
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')
    */
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    const reset = useField('reset')
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const contentValue = content.value
        const authorValue = author.value
        const infoValue = info.value
        props.addNew({
            content: contentValue,
            author: authorValue,
            info: infoValue,
            votes: 0
        })
        navigate('/')
    }
    const resetAll = () => {
        content.reset()
        author.reset()
        info.reset()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input name='content' value={content.value} onChange={content.onChange} />
                </div>
                <div>
                    author
                    <input name='author' value={author.value} onChange={author.onChange} />
                </div>
                <div>
                    url for more info
                    <input name='info' value={info.value} onChange={info.onChange} />
                </div>
                <button>create</button>
                <button type='reset' onClick={resetAll}>reset</button>
            </form>
        </div>
    )

}

export default CreateNew