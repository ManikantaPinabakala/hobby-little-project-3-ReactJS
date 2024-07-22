import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #152850;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 350px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 80px;
`

export const ArtistName = styled.h1`
  color: #ffffff;
  margin-bottom: 0;
  font-size: 32px;
`

export const Profession = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
`

export const PlaylistContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
`

export const PlaylistTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlaylistHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

export const SearchContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
`

export const SearchInputField = styled.input`
  background-color: transparent;
  color: #ffffff;
  border: none;
  outline: none;
`

export const TrackList = styled.ul`
  height: 260px;
  list-style: none;
  padding-left: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NoSongsContainer = styled.div`
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
