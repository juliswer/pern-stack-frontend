import {Card, CardContent, Grid, TextField, Typography} from '@mui/material';

export default function TaskForm() {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={3}>
                <Card
                    sx={{mt: 5}}
                >
                    <Typography>
                        Create Task
                    </Typography>
                    <CardContent>
                        <form>
                            <TextField 
                                variant='filled' 
                                label='Write your title'
                            />
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
