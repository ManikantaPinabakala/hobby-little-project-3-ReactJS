import {MdDelete} from 'react-icons/md'

import {
  TrackItem,
  TrackImage,
  TrackAndGenreContainer,
  TrackName,
  GenreName,
  Duration,
  DeleteButton,
} from './styledComponents'

const EachTrack = props => {
  const {trackDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <TrackItem>
      <TrackImage src={imageUrl} alt="track" />
      <TrackAndGenreContainer>
        <TrackName>{name}</TrackName>
        <GenreName>{genre}</GenreName>
      </TrackAndGenreContainer>
      <Duration>{duration}</Duration>
      <DeleteButton onClick={onClickDelete} data-testid="delete">
        <MdDelete color="#ffffff" size={16} />
      </DeleteButton>
    </TrackItem>
  )
}

export default EachTrack
