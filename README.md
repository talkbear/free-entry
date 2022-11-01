# Free Entry (自由门)
> Project management at clickup [here](https://app.clickup.com/36996818/v/l/s/61060385)
## Description

**About Author**

A experienced developer now lived in Tokyo/Japan, who is willing to help build a convinient tool to make life in overseas easier.

**About Project**

This project aims to build a cross-platform desktop/mobile application to speed up your video/music/surfing experience in overseas with shared free open vpn servers.

## Specification

### Website
#### Development

**Technology Stack**

- Render way: SSG (Static Site Generation)

> Why: 1 avoid slow initial render 2 SEO friendly 3 avoid caching problem in first render 4 easy to maintain by full-stack developer 5 not much pages.

- Javascript framework: Next.js

> Why Next.js: because it has the SSR support, and it's easy to use.
- HTML preprocessor: Pug
- CSS preprocessor: tailwindcss


#### Menu

- Index
- Download
- Help
- About

#### Index page

> refer to 快帆

**Free servers, No need to pay**

We will trying to find all free servers all over the world, you can use them for free, no need to pay.

**Auto switch to the best server that meets your needs**

Different servers have different speed, we will auto switch to the best server that meets your needs, so you can enjoy the best speed. Like music streaming, video streaming, surfing, etc.

**Safe connect, Based on OpenVPN**

We use most poplular open source vpn client OpenVPN to connect to all shared servers all over the world, which is the most secure vpn protocol.



#### Download

#### Help

#### About

- about author
- about website

### Application

#### Auto craw free servers from website

**Look outside**

- from free organization: such as freeopenvpn.org [here](https://www.freeopenvpn.org/premium.php?cntid=UK&lang=en)
- from academy organization: such as vpngate.net [here](https://www.vpngate.net/en/)
- from private free servers: such as freevpn.me [here](https://freevpn.me/)
- from brand vpn server provider with free-trial: such as nordvpn.com [here](https://nordvpn.com/)

**Look inside**

- from free organization
- from academy organization
- from brand vpn server provider with free-trial: such as kuaifan [here](https://www.kuaifan.co/)
- from private free servers bulit by individual

#### Features

**Client**

- All features based on openvpn
- Auto swithch server to the best one that meets your needs
  - Write a algorithm to judge which mainly needs of the current user, such as music streaming, video streaming, surfing, etc.
  - Switch to suitable server for current usage (this will make full use of the limited number of free servers)
- Auto update server list with username/pwd
- Auto download config files and auto import to client
- A banner space to show sponsor ads (like honeygain, expressvpn, kuaifan etc refer link)


**Server**

- Auto crawl free servers from website then store to database(implement a AI to do this if possible)
  - with script
  - with mannlly operation
  - with cooperation with brand vpn server provider(after certaion amount of users, we could develop a business relationship with them by provide guidance to them with the trial server for us)
- Auto download and read configuration files then store to database(servername, ip, port, username, pwd, etc)
- Auto test server speed and send to client with websocket(how to send it encrypted while to china)


