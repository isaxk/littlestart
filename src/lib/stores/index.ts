import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export const editMode: Writable<boolean> = writable(false);

export const bookmarks: any = writable([
    {
        name: "Entertainment",
        links: [
            {
                id: 0,
                name: "YouTube",
                href: "https://www.youtube.com"
            },
            {
                id: 1,
                name: "Netflix",
                href: "https://www.youtube.com"
            },
            {
                id: 2,
                name: "Disney+",
                href: "https://www.disneyplus.com"
            },
            {
                id: 3,
                name: "BBC iPlayer",
                href: "https://www.bbc.co.uk/iplayer"
            }
        ]
    },
    {
        name: "Stuff",
        links: [
            {
                id: 0,
                name: "Bitwarden",
                href: "https://vault.bitwarden.eu"
            },
            {
                id: 1,
                name: "Google Maps",
                href: "https://maps.google.com"
            },
            {
                id: 2,
                name: "Disney+",
                href: "https://www.disneyplus.com"
            },
            {
                id: 3,
                name: "BBC iPlayer",
                href: "https://www.bbc.co.uk/iplayer"
            }
        ]
    },
    {
        name: "Coding",
        links: [
            {
                id: 0,
                name: "GitHub",
                href: "https://github.com"
            },
            {
                id: 1,
                name: "isaxk.com",
                href: "https://www.isaxk.com"
            },
            {
                id: 2,
                name: "Cloudflare",
                href: "https://dash.cloudflare.com"
            },
            {
                id: 3,
                name: "Google Fonts",
                href: "https://dash.cloudflare.com"
            }
        ]
    },
    {
        name: "School",
        links: [
            {
                id: 0,
                name: "Arbor",
                href: "https://login.arbor.sc"
            },
            {
                id: 1,
                name: "Outlook",
                href: "https://outlook.office365.com"
            }
        ]
    }
]);



if(browser && localStorage.bookmarks) {
    bookmarks.set(JSON.parse(localStorage.bookmarks));
}

if(browser) {
    bookmarks.subscribe((n:any)=>localStorage.bookmarks=JSON.stringify(n));
}

