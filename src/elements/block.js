import Draggable from 'react-draggable';
import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const useStyles = makeStyles({
  block: {
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


export default function Block({title, code, draggable=true}) {
  const classes = useStyles();

  const block = () => {
    return (
      <Card className={classes.block} elevation={8}>
        <CardContent>
            <Typography>
              {title}
            </Typography>
          
            <Code code={code}/>
        </CardContent>

        <CardActions>
          <IconButton aria-label="Example">
            <DeleteIcon/>
          </IconButton>

        </CardActions>
      </Card>
    );
  }

  const draggableBlock = () => {
    return (
      <Draggable>
        {block()}
      </Draggable>
    );
  }

  return (draggable ? draggableBlock() :block());
}
