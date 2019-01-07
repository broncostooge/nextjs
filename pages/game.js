import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Game = (props) => (
  
    <Layout>
    <h1>{props.game.name}</h1>
    <img src={props.game.header_image}/>
    <p>DESCRIPTION: {props.game.detailed_description}</p>
    </Layout>
)

Game.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch('https://store.steampowered.com/api/appdetails/?format=json&appids='+id)
  const game = await res.json()
  return { game: game[id].data }
}

export default Game