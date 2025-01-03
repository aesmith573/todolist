import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

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
          <Fab className="fab-button">
            <AddIcon />
          </Fab>
        </form>
    </div>
)}

export default CreateArea;