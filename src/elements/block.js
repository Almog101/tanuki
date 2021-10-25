import Draggable from 'react-draggable';
import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const useStyles = makeStyles({
  block: {
    backgroundColor: "blue",
    width: "275px"
  },
  blockInfo: {

  },
  blockCode: {

  }
});

function Code({code}) {
  return (
    <SyntaxHighlighter language="python" style={darcula}>
      {code}
    </SyntaxHighlighter>
  );
};


export default function Block({title, code}) {
  const classes = useStyles();
  return (
    <Draggable>
      <Card className={classes.block}>
        <CardContent>
          <Paper>
            <Typography>
              {title}
            </Typography>
          </Paper>
          
          <Paper>
            <Typography>
              <Code code={code}/>
            </Typography>
          </Paper>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Draggable>
  );
}
