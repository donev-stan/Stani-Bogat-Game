import { getCurrentStage, sounds, volume } from "../variables.js";

const playCorrectSoundAtStage = () => {
	switch (getCurrentStage()) {
		case 1:
			console.log("Im here again");
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

		case 5:
			sounds.firstStageAudio.pause();
			sounds.secondStageAudio.play();
			break;

		case 10:
			sounds.secondStageAudio.pause();
			sounds.thirdStageAudio.play();
			break;

		case 15:
			sounds.thirdStageAudio.pause();
			sounds.fourthStageAudio.play();
			break;
	}
};

export default playCorrectSoundAtStage;
