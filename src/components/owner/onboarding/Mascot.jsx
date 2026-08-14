import styled from 'styled-components';
import mascotDefault from '../../../assets/owner/mascot/mascot-default.svg';
import mascotReading from '../../../assets/owner/mascot/mascot-reading.svg';
import mascotThinking from '../../../assets/owner/mascot/mascot-thinking.svg';
import mascotPointing from '../../../assets/owner/mascot/mascot-pointing.svg';
import mascotParty from '../../../assets/owner/mascot/mascot-party.svg';
import mascotChecking from '../../../assets/owner/mascot/mascot-checking.svg';

// pose: 'default' | 'reading' | 'thinking' | 'pointing' | 'party' | 'checking'
const ASSET_BY_POSE = {
  default: mascotDefault,
  reading: mascotReading,
  thinking: mascotThinking,
  pointing: mascotPointing,
  party: mascotParty,
  checking: mascotChecking,
};

const Image = styled.img`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  object-fit: contain;
`;

function Mascot({ pose = 'default', size = 120, className }) {
  return (
    <Image
      src={ASSET_BY_POSE[pose]}
      alt=""
      role="presentation"
      $size={size}
      className={className}
    />
  );
}

export default Mascot;
