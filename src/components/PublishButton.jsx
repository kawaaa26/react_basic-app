const PublishButton = (props) => {
  return (
    {/*
      onClickで使用しているprops.onClick()は、親ComponentであるArticleでPublishButtonに対して渡しているpropsである。
      */},
    <button onClick={ () => props.onClick() }>
      公開状態： {props.isPublished.toString()}
    </button>
  )
}

export default PublishButton;
