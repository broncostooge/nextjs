import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Steam Games for {props.user.personaname}</h1>
    <ul>
      {props.listOfGames.map((game, index) => (
        <li key={game.appid}>
          <img src={"http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_icon_url+".jpg"}/>
          <Link as={'/p/'+game.appid} href={'/post?id=' + game.appid}>
            <a>{game.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3F1EEFCCC0C8F311EFD50A76A5C26E68&steamid=76561197994457853&include_appinfo=1&format=json')
  const data = await res.json()
  
  const userRes = await fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=3F1EEFCCC0C8F311EFD50A76A5C26E68&steamids=76561197994457853')
  const userData = await userRes.json()
  
  let listOfGames = []
  let userInformation = {}
  
  data.response.games.map((game, index) => (
    listOfGames.push({
      appid: game.appid,
      name: game.name,
      playtime_forever: game.playtime_forever,
      img_icon_url: game.img_icon_url,
      img_logo_url: game.img_logo_url,
      has_community_visible_stats: game.has_community_visible_stats
    })
  ))

  userData.response.players.map((player, index) => (
    userInformation= {
      steamid: player.steamid,
      communityvisibilitystate: player.communityvisibilitystate,
      profilestate: player.profilestate,
      personaname: player.personaname,
      lastlogoff: player.lastlogoff,
      profileurl: player.profileurl,
      avatar: player.avatar,
      avatarmedium: player.avatarmedium,
      avatarfull: player.avatarfull,
      personastate: player.personastate,
      primaryclanid: player.primaryclanid,
      timecreated: player.timecreated,
      personastateflags: player.personastateflags
    }
  ))
  
  return {
    listOfGames: listOfGames,
    user: userInformation
  }
}

export default Index