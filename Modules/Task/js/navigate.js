import { getLoaderEl } from "./components.js"

// Назвать функцию navigate
export async function navigate(cardName) {   // делаем функцию асинхронной
  const appEl = document.getElementById("app")
  appEl.innerHTML = ''

  const loaderEl = getLoaderEl()
  appEl.append(loaderEl)

  switch (cardName) {
      case "add":
          const addCard = await import("./addCard.js")  // import асинхронная функция, все экспортируемые сущности из этого модуля помещ в этот объект
          addCard.default(appEl)
          loaderEl.remove()
          break
      default:
          const homeCard = await import("./homeCard.js")
          homeCard.default(appEl)
          loaderEl.remove()
  }
}