import {atom, selector} from 'recoil'

export const religionState = atom({
  key: 'religionState',
  default: ''
});

export const religionInfoSelector = selector({
  key: "religionInfoSelector",
  get: ({get}) => {
    const state = get(religionState);
    switch(state){
      default:
        return{
          img: "#",
          desc: "No Religion Selected"
        }
      case "Atheism":
        return {
          img: "#",
          desc: "You are convinced there is no god. You simply cannot fathom how a god could allow the tragedies around to happen. The world is in chaos, and you see no order to it."
        }
      case "Cat Worship":
        return {
          img: "#",
          desc: "The cat is your lord. You must make sure that you convert everyone to cat religion. You main goals are to reach everyone around, converting them to cat worship. This religion focuses mainly on communicating with others in your service to the supreme overlords. Meow!"
        }
      case "Emperor Worship":
        return {
          img: "#",
          desc: "Your goal is to revive the Roman Empire. You were responsible for the release of the meme discussing how men think about the Roman Empire. You want the emperor to reign as god. Emperor worship focuses on making sure the kingdom is order to please your emperor."
        }
      case "Eternal Servitude":
      return {
        img: "#",
        desc: "You serve your fellow man. You could care less if there is a god. In fact, your purpose in life is to make sure others are taken care of. Helping others gives your life purpose."
      }
      case "Anxious Elixir Drinkers":
      return {
        img: "#",
        desc: "You are part of the Order of the Elixir Drinkers. Your main goal is to get everyone around to drink your group's elixir which will cause them to become uncontrollably anxious. Your desire stems from others' ineptitude in helping your overcome your anxiety in your younger days."
      }
      case "Eternal Physiological Beings":
      return{
        img: "#",
        desc: "The Eternal Physiological Beings are focused on making immortality a reality. They are composed by scientists from around the globe, trying to upload a human's brain into some sort of electronic media that will create immortality. They interesting thing is that they do not want to share this technology with the 'lesser' species"
      }
    }
  }
})
