import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
import { Item } from "stream-chat-react/dist/components/AutoCompleteTextarea/Item";

const api_key = "cqskapm2hd3h";
const api_secret =
  "e42jwzacr27prhzzf69t2h7u47wpkz6mkeb59w39493qhxcntpcepxb5ad8wyqen";
// const user_id = "user_2rWFdzJLX8MvP0bvRILkPHjl6R8";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json()

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("A NEW USER HAS BEEN CREATED", token)
  const client = await clerkClient()
  await serverClient.upsertUser({id: user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token
    },
  })

  //Give access to this user for all chats
  const slugs = ["python-chat", "js-chat", "react-chat", "web-chat"]
  slugs.forEach(async (item)=>{
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name: capitalize(item) + " Discussion ",
        created_by_id: user.data.id

    });
    await channel.create()
    channel.addMembers([user.data.id])
  })
  return Response.json({ message: 'Hello World' })
}
