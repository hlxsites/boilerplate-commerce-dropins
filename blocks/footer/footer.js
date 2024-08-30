import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";
import * as shopYourVision from "@dropins/shop-your-vision/api.js";
import { render as shopYourVisionProvider } from "@dropins/shop-your-vision/render.js";
import ChatBot from "@dropins/shop-your-vision/containers/ChatBot.js";
import {
  Icon,
  provider as UI,
} from "@dropins/tools/components.js";

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata("footer");
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : "/footer";
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = "";
  const footer = document.createElement("div");
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  // Global chat bot
  const chatBotWrapper = document.createElement("div");
  chatBotWrapper.id = "chat-bot";
  chatBotWrapper.classList.add("chat-bot__wrapper");

  const iframe = document.createElement("iframe");
  iframe.id = "chat-bot-iframe";
  iframe.height = "100%";
  iframe.width = "100%";
  iframe.style.border = "none";

  shopYourVisionProvider.render(ChatBot, {
    handleDismiss: () => {
      chatBotWrapper.classList.remove("chat-bot--open");
      chatBotWrapper.classList.add("chat-bot--close");
    },
    slots: {
      ChatBox: (ctx) => {
        ctx.replaceWith(iframe);
      },
    },
  })(chatBotWrapper);

  document.dispatchEvent(
    new CustomEvent("chat-bot-ready", { detail: { iframe } })
  );

  block.append(chatBotWrapper);

  const chatBotButton = document.createElement("button");
  chatBotButton.classList.add("chat-bot__button");
  chatBotButton.innerHTML = "Chat";
  UI.render(Icon, { source: "User" })(chatBotButton);

  chatBotButton.addEventListener("click", () => {
    iframe.src =
      "https://1244026-931oliveguineafowl-stage.adobeio-static.net/index.html#/";

    window.addEventListener("message", (event) => {
      if (
        event.origin !==
        "https://1244026-931oliveguineafowl-stage.adobeio-static.net"
      )
        return;

      console.log("Message received from iframe:", event.data);

      const pageContext = window.adobeDataLayer.getState().pageContext;

      const name = [pageContext?.pageName, pageContext?.pageType]
        .filter((value) => value)
        .join(" ");

      event.source.postMessage(
        {
          type: "context",
          payload: {
            name: name,
          },
        },
        event.origin
      );
    });
    chatBotWrapper.classList.remove("chat-bot--close");
    chatBotWrapper.classList.add("chat-bot--open");
  });

  block.append(chatBotButton);
}
