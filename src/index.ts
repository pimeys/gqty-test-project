import { resolve } from '../gqty'

export async function fetchData() {
  const data = await resolve(
    ({ query }) => {
      const user = query.user({ by: { id: 'user_01H264P7DZCN4ADZHM9EHH1F0G' } })

      return user?.name
    }
  );

  console.log(data)
}

fetchData().then(() => console.log('done'))
