import {atom, selector} from 'recoil'

export const backgroundState = atom({
  key: "backgroundState",
  default: ""
})

export const backgroundInfoSelector = selector({
  key: "backgroundInfoSelector",
  get: ({get}) => {
    const state = get(backgroundState);
    switch(state){
      default:
        return{
          img: "#",
          desc: "Select A Background"
        }
      case "World Traveler":
        return {
          img: "#",
          desc: "You often have a desire to try new things and experience new cultures. You have traveled all around the world and would like to continue after your duties are done."
        }
      case "Village Animal Keeper":
        return {
          img: "#",
          desc: "You grew up in a small village and took care of all your neighbors' animals. You did so thoughtfully and carefully, treating them as though they were your own."
        }
      case "Small-town Leader":
        return {
          img: "#",
          desc: "You were the leader of your small town. Each person looked up to you and knew you personally. You never missed an opportunity to talk to one of your constituents."
        }
      case "City Peacekeeper":
      return {
        img: "#",
        desc: "Any time someone had a quarrel, they brought it to you. You are known for you mild demeanor and desire to help others."
      }
      case "Orphan":
      return {
        img: "#",
        desc: "You were abandoned by your parents at a young age, but had a tumultuous life in the village orphanage, but you had several friends. You are always a bit on edge."
      }
    }
  }
})
