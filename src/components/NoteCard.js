import { DeleteOutlined } from '@material-ui/icons';
import { 
    Card, 
    CardHeader,
    CardContent, 
    IconButton,
    Typography,
} from '@material-ui/core';

function NoteCard({note, handleDelete}) {

    return (
        <Card elevation={2}>
            <CardHeader 
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );

}

export default NoteCard;