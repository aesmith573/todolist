import AddIcon from "@mui/icons-material/Add";

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
            rows="3"
          />
          <AddIcon />
        </form>
    </div>
)}

export default CreateArea;