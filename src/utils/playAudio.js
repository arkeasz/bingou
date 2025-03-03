/**
 * Play audio
 * @param { string } url
 */
const usePlayAudio = url =>  {
    const music = new Audio(url);
    music.play();
}

export default usePlayAudio
