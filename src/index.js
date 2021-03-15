import x from './x';
import img from "./1.png"
const div = document.getElementById("app")

// const str = `
//   <img src="${img}">
// `
// div.innerHTML = str


const button = document.createElement("button")
button.innerHTML = "懒加载"
button.onclick = () => {
  const p = import("./lazy")
  p.then((module) => {
    const fn = module.default
    fn()

  })
}
document.body.appendChild(button)