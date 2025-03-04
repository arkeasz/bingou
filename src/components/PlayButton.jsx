import './Result.css';

const PlayButton = ({ onClick }) => {
  return (
    <div className='play' onClick={onClick}>
        <svg viewBox="0 0 80 80" className="play-button" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 67.5V65H12.5H10V42.5V20H12.5H15V17.5V15H17.5H20V17.5V20H25H30V22.5V25H35H40V27.5V30H45H50V32.5V35H55H60V37.5V40H62.5H65V42.5V45H62.5H60V47.5V50H55H50V52.5V55H45H40V57.5V60H35H30V62.5V65H25H20V67.5V70H17.5H15V67.5Z" fill="#70BAB1"/>
        <mask id="path-2-inside-1_2716_3640" fill="white">
        <path d="M10 72.5V70H7.50001H5V42.5V15H7.50001H10V12.5V10.0001H17.5H25V12.5V15H30H35V17.5V20H40H45V22.5V25H50H55V27.5V30H60H65V32.5V35H67.5H70V42.5V50H67.5H65V52.5V55H60H55V57.5V60H50H45V62.5V65H40H35V67.5V70H30H25V72.5V75H17.5H10V72.5ZM20 67.5V65H25H30V62.5V60H35H40V57.5V55H45H50V52.5V50H55H60V47.5V45H62.5H65V42.5V40H62.5H60V37.5V35H55H50V32.5V30H45H40V27.5V25H35H30V22.5V20H25H20V17.5V15H17.5H15V17.5V20H12.5H10V42.5V65H12.5H15V67.5V70H17.5H20V67.5Z"/>
        </mask>
        <g filter="url(#filter0_i_2716_3640)">
        <path d="M10 72.5V70H7.50001H5V42.5V15H7.50001H10V12.5V10.0001H17.5H25V12.5V15H30H35V17.5V20H40H45V22.5V25H50H55V27.5V30H60H65V32.5V35H67.5H70V42.5V50H67.5H65V52.5V55H60H55V57.5V60H50H45V62.5V65H40H35V67.5V70H30H25V72.5V75H17.5H10V72.5ZM20 67.5V65H25H30V62.5V60H35H40V57.5V55H45H50V52.5V50H55H60V47.5V45H62.5H65V42.5V40H62.5H60V37.5V35H55H50V32.5V30H45H40V27.5V25H35H30V22.5V20H25H20V17.5V15H17.5H15V17.5V20H12.5H10V42.5V65H12.5H15V67.5V70H17.5H20V67.5Z" fill="#26435C"/>
        </g>
        <path d="M10 72.5V70H7.50001H5V42.5V15H7.50001H10V12.5V10.0001H17.5H25V12.5V15H30H35V17.5V20H40H45V22.5V25H50H55V27.5V30H60H65V32.5V35H67.5H70V42.5V50H67.5H65V52.5V55H60H55V57.5V60H50H45V62.5V65H40H35V67.5V70H30H25V72.5V75H17.5H10V72.5ZM20 67.5V65H25H30V62.5V60H35H40V57.5V55H45H50V52.5V50H55H60V47.5V45H62.5H65V42.5V40H62.5H60V37.5V35H55H50V32.5V30H45H40V27.5V25H35H30V22.5V20H25H20V17.5V15H17.5H15V17.5V20H12.5H10V42.5V65H12.5H15V67.5V70H17.5H20V67.5Z" stroke="#213B50" stroke-width="2" mask="url(#path-2-inside-1_2716_3640)"/>
        <defs>
        <filter id="filter0_i_2716_3640" x="5" y="10.0001" width="65" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2716_3640"/>
        </filter>
        </defs>
        </svg>
    </div>
  );
};

export default PlayButton;
