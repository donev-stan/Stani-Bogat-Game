import { getCurrentStage, sounds, volume } from "../variables.js";

const playCorrectSoundAtStage = () => {
	switch (getCurrentStage()) {
		case 1:
			setTimeout(() => {
				sounds.firstStageAudio.play();
				sounds.firstStageAudio.volume = volume;

				if (volume !== 0) {
					sounds.firstStageAudio.volume = 0.1;
					const fadeAudio = setInterval(() => {
						if (sounds.firstStageAudio.volume < volume) sounds.firstStageAudio.volume += 0.1;
						if (sounds.firstStageAudio.volume > volume) {
							sounds.firstStageAudio.volume = volume;
							clearInterval(fadeAudio);
						}
					}, 1000);
				}
			}, 2000);
			break;

		case 4:
			sounds.firstStageAudio.pause();
			sounds.secondStageAudio.play();
			break;

		case 13:
			sounds.secondStageAudio.pause();
			sounds.thirdStageAudio.play();
			break;

		case 14:
			sounds.thirdStageAudio.pause();
			sounds.fourthStageAudio.play();
			break;
	}
};

export default playCorrectSoundAtStage;
