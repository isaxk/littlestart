<script lang="ts">
	import Group from "./Group.svelte";

    const bookmarks = [
        {
            name: "Entertainment",
            links: [
                {
                    name: "YouTube",
                    href: "https://www.youtube.com"
                },
                {
                    name: "Netflix",
                    href: "https://www.youtube.com"
                },
                {
                    name: "Disney+",
                    href: "https://www.disneyplus.com"
                },
                {
                    name: "BBC iPlayer",
                    href: "https://www.bbc.co.uk/iplayer"
                }
            ]
        },
        {
            name: "Stuff",
            links: [
                {
                    name: "Bitwarden",
                    href: "https://vault.bitwarden.eu"
                },
                {
                    name: "Google Maps",
                    href: "https://maps.google.com"
                },
                {
                    name: "Disney+",
                    href: "https://www.disneyplus.com"
                },
                {
                    name: "BBC iPlayer",
                    href: "https://www.bbc.co.uk/iplayer"
                }
            ]
        },
        {
            name: "Coding",
            links: [
                {
                    name: "GitHub",
                    href: "https://github.com"
                },
                {
                    name: "isaxk.com",
                    href: "https://www.isaxk.com"
                },
                {
                    name: "Cloudflare",
                    href: "https://dash.cloudflare.com"
                },
                {
                    name: "Google Fonts",
                    href: "https://dash.cloudflare.com"
                }
            ]
        },
        {
            name: "School",
            links: [
                {
                    name: "Arbor",
                    href: "https://login.arbor.sc"
                },
                {
                    name: "Outlook",
                    href: "https://outlook.office365.com"
                }
            ]
        }
    ]
</script>

<div class="bookmarks">
    {#each bookmarks as group, i }
        <Group data={group}/>
    {/each}
</div>

<style>
    .bookmarks {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        margin-top: 50px;
    }
</style>