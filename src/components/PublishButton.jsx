import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

const PublishButton = (props) => {
  return (
    {/*
      onClickで使用しているprops.onClick()は、親ComponentであるArticleでPublishButtonに対して渡しているpropsである。
      */},
    <div>
      <Button onClick={ () => props.onClick() } variant="contained" color="success">
        公開状態： {props.isPublished.toString()}
      </Button>
      <br />
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
    </div>
  )
}

export default PublishButton;
