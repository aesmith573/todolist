import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Note() {
  return(<div className='card'>
    <Card>
      <Typography variant='h5' component='div'>
        Task Title
      </Typography>
      <CardContent>
        I need to walk the dog. I want to walk them all around the neighborhood.
      </CardContent>
    </Card>
  </div>)
}

export default Note;