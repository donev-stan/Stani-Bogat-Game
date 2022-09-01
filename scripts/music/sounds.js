function PlayCorrectAnswer() {
  return PlayAudioFile("sounds/correct-answer.mp3");
}

function PlayFinalAnswer() {
  return PlayAudioFile("sounds/final-answer.mp3");
}

function PlayPhoneAFriend() {
  return PlayAudioFile("sounds/phone-a-friend.mp3");
}

function PlayWrongAnswer() {
  return PlayAudioFile("sounds/wrong-answer.mp3");
}

function PlayHundredToThousand() {
  const audio = PlayAudioFile("sounds/soundQuestionFrom100To1000.mp3");
  audio.loop = true;
  return audio;
}

function PlayThousandToFiftyThousand() {
  const audio = PlayAudioFile("sounds/soundQuestionFrom1000To50000.mp3");
  audio.loop = true;
  return audio;
}

function PlayFiftyThousand() {
  const audio = PlayAudioFile("sounds/soundQuestion50000.mp3");
  audio.loop = true;
  return audio;
}

function PlayOneHundredThousand() {
  const audio = PlayAudioFile("sounds/soundQuestion100000.mp3");
  audio.loop = true;
  return audio;
}

function PlayLetsPlaySound() {
  return PlayAudioFile("sounds/lets-play.mp3");
}

function PlayMainTheme() {
  return PlayAudioFile("sounds/main-theme.mp3");
}

function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  return audio;
}

export {
  PlayCorrectAnswer,
  PlayFinalAnswer,
  PlayPhoneAFriend,
  PlayWrongAnswer,
  PlayHundredToThousand,
  PlayThousandToFiftyThousand,
  PlayFiftyThousand,
  PlayOneHundredThousand,
  PlayLetsPlaySound,
  PlayMainTheme,
};
