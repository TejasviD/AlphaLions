import React from "react";
import discordText from "../assets/discordText.png";
import discord from "../assets/discord.png";

export default function discordInvite() {
    return (
        <a target="_blank" href="https://discord.com/invite/z8hyV7eXya" className="discordLogo-wrapper">
            <div className="discordLogo">
                <img className="discordImg" src={discord} alt="discordLogo" />
            </div>
            <img className="iconRotate" src={discordText} alt="discordText" />
        </a>

    );
}