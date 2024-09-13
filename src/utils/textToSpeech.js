// src/utils/textToSpeech.js

export function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Slightly slower rate for clearer pronunciation
    utterance.pitch = 1.2; // Slightly higher pitch for a more engaging sound
    window.speechSynthesis.speak(utterance);
  } else {
    console.log('Text-to-speech not supported in this browser.');
  }
}