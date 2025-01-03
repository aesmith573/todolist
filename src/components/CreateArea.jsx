
function CreateArea() {
  return(
    <div className="container">
        <form className="text-area">
          <input 
            name="title" 
            placeholder="Title"
          />
          <textarea
            placeholder="Note Content"
          />
        </form>
    </div>
)}

export default CreateArea;