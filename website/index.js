"use strict";
const form = document.querySelector("form");
const textbox = document.querySelector('input[type="text"]');
const messageContainer = document.querySelector("#message-container");
const submitMessage = document.querySelector('button[type="submit"]');

const addMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `
    <div class="flex w-full group-scope justify-start hover:bg-discord-600 text-white text-sm py-2 mb-1">
        <div class="mx-3">
            <img class="rounded-full w-12" src="${message.pfp}">
        </div>
        <div class="w-11/12 flex flex-col justify-start gap-0">
            <div class="pr-4 break-words">
                <strong>${message.usr}</strong> <span class="text-[0.6rem] text-discord-100">@ ${message.time}</span>
                <br>${message.txt}
            </div>
        </div>
    </div>
    `;
    messageContainer.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
};

const createGuild = (guild) => {
  document.getElementById("sidebar").innerHTML += `
    <br>
    <div>
    <div class="bg-discord-400 flex items-center justify-center group w-12 h-12 rounded-full hover:bg-discord-200 hover:rounded-2xl transition-all">
        <img alt="guild icon" aria-label="guild icon" src="${guild.img}" class="w-7 h-7 fill-discord-100 transition-all" ></img>
        <div class="absolute left-[4.5rem] bg-discord-800 p-2 text-sm font-bold scale-0 rounded-md group-hover:scale-100 transition-all">${guild.name}</div>
    </div>
</div>
`;
}

form.onsubmit = (event) => {
    event.preventDefault();
    const username = "SAM_SOONG";
    const text = textbox.value;
    if (text.trim() === "") {
        return;
    }
    else {
        const newTime = new Date();
        const time = `${newTime.getHours()}:${newTime.getMinutes()}`;
        const newMessage = { text, username, time };
        addMessage(newMessage);
    }
    textbox.value = "";
};