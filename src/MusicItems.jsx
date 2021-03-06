import React from 'react';

import styled from '@emotion/styled';

const MusicWrap = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  height: '80%',
  overflowY: 'scroll',
});

const MusicItem = styled.li({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 10px',
  margin: '10px',
  border: '2px solid #f0f0f0',
  borderRadius: '5px',
  cursor: 'pointer',
});

const MusicItems = React.memo(({ music, onClick }) => (
  <MusicWrap>
    {
      music.map((musicItem) => {
        const {
          snippet: {
            title, description, channelTitle, thumbnails,
          },
        } = musicItem;

        return ((
          <MusicItem
            key={title}
            onClick={() => onClick(musicItem, music)}
          >
            <img src={thumbnails.default.url} alt={description} />
            <div>
              <p>{title}</p>
              <small>{channelTitle}</small>
            </div>
          </MusicItem>
        ));
      })
    }
  </MusicWrap>
));

export default MusicItems;
