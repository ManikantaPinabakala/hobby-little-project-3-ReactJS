import styled from 'styled-components'

export const TrackItem = styled.li`
  display: flex;
  align-items: center;
`

export const TrackImage = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 15px;
  border-radius: 8px;
`

export const TrackAndGenreContainer = styled.div`
  flex-grow: 1;
`

export const TrackName = styled.p`
  color: #ffffff;
  margin-block: 5px 10px;
`

export const GenreName = styled.p`
  color: #3b82f6;
  margin-block: 5px;
`

export const Duration = styled.p`
  color: #ffffff;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-inline: 50px;
`
