import {atom, selector} from 'recoil'

export const hobbyState = atom({
  key: "hobbyState",
  default: ""
})

export const hobbyInfoSelector = selector({
  key: "hobbyInfoSelector",
  get: ({get}) => {
    const state = get(hobbyState);
    switch(state){
      default:
        return{
          img: "#",
          desc: "Select A Main hobby"
        }
      case "Lockpicking":
        return {
          img: "#",
          desc: "You can easily pick even the most difficult of locks. You used to get in trouble as a kid for breaking into the dessert closet in your village."
        }
      case "Singing":
        return {
          img: "#",
          desc: "You have an amazing voice that has been fine-tuned through many years of performances. You enjoy sharing your voice with others."
        }
      case "Gaming":
        return {
          img: "#",
          desc: "You enjoy gaming. In your spare time, you often play all manners of games. You often play alone, but sometimes with others."
        }
      case "Nature":
      return {
        img: "#",
        desc: "You enjoy spending time in nature. In fact, some of your favorite activities involve hiking and camping. Sometimes, it is just nice to get away from civilization and have some time alone out in nature."
      }
      case "Work":
      return {
        img: "#",
        desc: "You don't really have a major hobby. Your hobby is working. Your work is fulfilling, so you don't really have any need for a hobby."
      }
    }
  }
})
