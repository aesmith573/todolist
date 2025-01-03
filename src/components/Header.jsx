import EditIcon from '@mui/icons-material/Edit';

function Header() {
  return(<>
    <header className="todo-title">
      <EditIcon className='edit-icon'/>
      <h1>Andy's Todo List!</h1>
    </header>
  </>)
}

export default Header;