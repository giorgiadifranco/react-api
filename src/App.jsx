import { useState } from 'react'

import './App.css'

const initialFormArticles = {
  title: '',
  image: '',
  content: '',
  category: '',
  tags: [],
  published: false,
}

function App() {

  const [articles, setArticles] = useState(initialFormArticles)

  const [newArticle, setNewArticle] = useState ([])

  function handleFormSubmit(e){
    e.preventDefault()
    console.log('Form sent', articles);


    
    setNewArticle({
      title: '',
    image: '',
    content: '',
    category: '',
    tags: [],
    published: false,
    })

console.log(articles);


  }

  /*function addTitle(e){
    e.preventDefault()
    

    setTitles(newTitles)

    setNewTitle('')

    console.log(newTitles);
    
  }*/

 

  function handleTrashBtn(e){
   console.log(e.target);
   const articleIndexToTrash = Number(e.target.getAttribute('data-index'))

   console.log(articles, articleIndexToTrash);

   const newArticles = titles.filter((article, index) => index != articleIndexToTrash)
   console.log(newArticles);

   setArticles(newArticles)
   
   
   
  }

  return (
    <>
    
      <div className='container'>
      <h2>Your Articles</h2>

      
        <form onSubmit={addArticle}>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>Title</label>
          </div>

          <div className="input-group mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="title" 
            aria-label="title" 
            aria-describedby="button-addon2" 
            id=""
            name=""
            value={newArticle.title}
           />
          </div>
          

        </form>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="formId1"
            id="formId1"
            value={newArticle.content}
            placeholder=""
          />
          <label htmlFor="formId1">Content</label>
        </div>

        
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
          />
          <label htmlFor="formId1">Category</label>
        </div>
        
        {/*         button     */}
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>

        <p className="list-titles">List titles</p>
        <ul className="list-group">
                {articles.map((title, index)=> <li key={index} className='list-group-item'>{title} <button
                className="btn btn-sm btn-danger"
                data-index={index}
                
                onClick={handleTrashBtn}
              >
                <i class="bi bi-trash3-fill "></i>
              </button>

              </li>)} 
        </ul>   
      </div>
      
    </>
  )
}

export default App
