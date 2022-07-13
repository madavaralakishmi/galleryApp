import './index.css'

const ThumbnailItem = props => {
  const {imageUrlDetails, onImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageUrlDetails

  const onImageButton = () => {
    onImage(id)
  }

  const imageFilter = isActive ? 'btn-opticity' : ''

  return (
    <li>
      <button type="button" onClick={onImageButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageFilter}
        />{' '}
      </button>
    </li>
  )
}

export default ThumbnailItem
