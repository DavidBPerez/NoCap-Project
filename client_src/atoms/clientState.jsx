import {atom, selector} from 'recoil'

export const charState = atom({
  key: 'charState',
  default: ''
});

export const charInfoSelector = selector({
  key: "charInfoSelector",
  get: ({get}) => {
    const state = get(charState);
    switch(state){
      default:
        return{
          img: "#",
          desc: "No Character Selected Yet"
        }
      case "Seeker":
        return {
          img: "#",
          desc: "The seeker is a natural born leader. Seekers are curious, creative, and open-minded inviduals with a knack for exploration. However, they often must keep their distractable and gullible nature at bay."
        }
      case "Paladin":
        return {
          img: "#",
          desc: "The paladin is a organized and efficient. Paladins are also hard-working, loyal, and responsible. Why else would the clerics choose them to be the front-line defense? They must, however, take care not to be too rigid at times."
        }
      case "Bard":
        return {
          img: "#",
          desc: "The bard is a creative lad! Bards are happy to speak to any and all that they meets on their journey. Their musical talent is only rivaled by their legendary feats. However, they may get carried away at times with their tales, confusing fact with fiction."
        }
      case "Negotiator":
      return {
        img: "#",
        desc: "Ah, yes, the negotiator: General Kenobi! Negotiators' skills at deal-making are remarkable. They are trustworthy, empathetic, and kind. They always try to make sure that each side gets an equal share. However, they are gullible and often taken advantage of."
      }
      case "Monk":
      return {
        img: "#",
        desc: "The monk is a reclusive being by nature, but not all are. They are stoic and loyal to their cause. Nothing can make them loose their cool. However, this lack of emotion usually makes them seem aloof and uncaring."
      }
    }
  }
})